<template>
    <div class="node" @click="notifyRightNode">Left</div>
</template>

<script setup>
const notifyRightNode = () => {
    alert("To be discussed");
};
    
</script>

<style scoped>
    div {
        position: relative;
        left: -20rem;
        top: 5rem;
    }
</style>