<template>
    <div id="svgContainer">
    </div>
</template>

<script>
import * as d3 from "d3";
import { onMounted } from "vue";

export default {
    props: ['nodes'],
    setup(props) {  
        onMounted(() => {

            const width = 928;


            // Compute the tree height; this approach will allow the height of the
            // SVG to scale according to the breadth (width) of the tree layout.
            const root = d3.stratify()
            .id((d) => d.name)
            .parentId((d) => d.parent)(props.nodes);
            const dx = 30;
            const dy = width / (root.height + 1);
            console.log(root.height);

            // Create a tree layout.
            const tree = d3.tree().nodeSize([dx, dy]);

            tree(root);

            // Compute the extent of the tree. Note that x and y are swapped here
            // because in the tree layout, x is the breadth, but when displayed, the
            // tree extends right rather than down.
            let x0 = Infinity;
            let x1 = -x0;
            root.each(d => {
                if (d.x > x1) x1 = d.x;
                if (d.x < x0) x0 = d.x;
            });

            // Compute the adjusted height of the tree.
            const height = x1 - x0 + dx * 5;


            const svg = d3.select('#svgContainer')
                .append('svg')
                .attr("width", width)
                .attr("height", height)

            svg.append("g")
                .attr("fill", "none")
                .attr("stroke", "#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5)
            .selectAll()
                .data(root.links())
                .join("path")
                .attr("d", d3.linkHorizontal()
                    .x(d => d.y)
                    .y(d => d.x));

            const node = svg.append("g")
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 3)
            .selectAll()
            .data(root.descendants())
            .join("g")
                .attr("transform", d => `translate(${d.y},${d.x})`);

            node.append("circle")
                .attr("fill", d => d.children ? "#555" : "#999")
                .attr("r", 2.5);

            node.append("text")
                .attr("dy", "0.31em")
                .attr("x", d => d.children ? -6 : 6)
                .attr("text-anchor", d => d.children ? "end" : "start")
                .text(d => d.data.name)
                .attr("stroke", "white")
                .attr("paint-order", "stroke");

            return svg.node();
        }) 
    
    },
}
</script>

<style>
#svgContainer {
    padding: 10px;
}
</style>