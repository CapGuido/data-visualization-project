<template>
    <div id="grape">
    </div>
</template>

<script>
import * as d3 from "d3";

export default {
    props: ['data'],
    setup(props) {
        console.log(props.data)
    },
    mounted() {
        const width = 960;
        const height = 500;

        d3.select('#grape')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    }
}
</script>