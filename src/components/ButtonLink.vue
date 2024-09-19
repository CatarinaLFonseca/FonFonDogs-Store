<template>       
    <button id="buttonTwo" :style="{ color: colorProps }">Schedule a call</button>
</template>

<script setup>
const props = defineProps({
    colorProps: {
        type: String,
        default: () => '#ffff'
    }
})
</script>

<style scoped>

#buttonTwo {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    width: 129px;
    height: 10px;
    cursor: pointer;
}
</style>