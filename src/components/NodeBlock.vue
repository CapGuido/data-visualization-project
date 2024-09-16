<template>
    <div class="singleNode">
        <h3>name: {{ node.name }}</h3>
    </div>
</template>

<script>
export default {
    name: "NodeBlock",
    props: ['node'],
}
</script>

<style>
.singleNode {
    width: 300px;
    height: 130;
    margin: 5px;
    border-style: solid;
    border-radius: 5px;
}
</style>
