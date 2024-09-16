<template>
    <div>
        <h1 id="homePageTitle">Hierarchy display</h1>
        <hierarchy-tree class="hierarchyTree" :nodes="data" ></hierarchy-tree>
    </div>
</template>

<script>
import HierarchyTree from './HierarchyTree.vue';

export default {
  name: 'HomePage',
  components: { HierarchyTree },
  data() {
    return {
        "data":[
            {   
                "name":"A",
                "description":"This is a description of A", 
                "parent":"",
                "children" : []
            },
            {
                "name":"B",
                "description":"This is a description of B", 
                "parent":"A"
            },
            {
                "name":"C",
                "description":"This is a description of C", 
                "parent":"A"
            },
            {
                "name":"D",
                "description":"This is a description of D", 
                "parent":"A"
            },
            {
                "name":"B-1",
                "description":"This is a description of B-1", 
                "parent":"B"
            },
            {
                "name":"B-2",
                "description":"This is a description of B-2", 
                "parent":"B"
            },
            {
                "name":"B-3",
                "description":"This is a description of B-3", 
                "parent":"B"
            }
        ]
    }}
}
</script>

<style>
</style>