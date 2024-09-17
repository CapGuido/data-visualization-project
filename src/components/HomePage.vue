<template>
    <h1 id="homePageTitle">Hierarchy display</h1>
    <hierarchy-tree class="hierarchyTree" :nodes="dataNodes"></hierarchy-tree>
</template>

<script>
import HierarchyTree from './HierarchyTree.vue';
import { onMounted, ref } from 'vue';

export default {
    name: 'HomePage',
    components: { HierarchyTree },
    data() {
        return {

            "dataNodes": [
                {
                    "name": "A",
                    "description": "This is a description of A",
                    "parent": ""
                },
                {
                    "name": "B",
                    "description": "This is a description of B",
                    "parent": "A"
                },
                {
                    "name": "C",
                    "description": "This is a description of C",
                    "parent": "A"
                },
                {
                    "name": "D",
                    "description": "This is a description of D",
                    "parent": "A"
                },
                {
                    "name": "B-1",
                    "description": "This is a description of B-1",
                    "parent": "B"
                },
                {
                    "name": "B-2",
                    "description": "This is a description of B-2",
                    "parent": "B"
                },
                {
                    "name": "B-3",
                    "description": "This is a description of B-3",
                    "parent": "B"
                }
            ]

        }
    },
    setup() {
        let data = ref([]);

        onMounted(async () => {
            try {
                const response = await fetch('http://localhost:3000/api/data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                data.value = responseData.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })

        return { data };
    },

}
</script>
