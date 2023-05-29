<template>
    <div class="tree">
        <div class="node">Root</div>
        <LeftNode />
        <RightNode />
    </div>
</template>

<script setup>
import LeftNode from './LeftNode.vue';
import RightNode from './RightNode.vue';
</script>

<style>
.node {
    padding: 2rem;
    border: black 1px solid;
}
</style>