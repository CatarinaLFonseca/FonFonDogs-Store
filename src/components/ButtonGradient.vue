<template>
    <button id="buttonOne">
        {{ title }}
        <span class="detailButton">></span>
    </button>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style scoped>

span {
    font-family: "Inter", Medium;
    font-weight: 600;
}

#buttonOne {
    background: linear-gradient(to right, #FD7452 50%, #FF4265 100%, transparent 100%);
    border: solid 1px #fc5e36;
    border-radius: 25px;
    color: #ffff;
    font-family: "Inter", Medium;
    font-weight: 400;
    width: 159px;
    height: 48px;
    margin-right: 16px;
    cursor: pointer;

}

.detailButton {
    display: inline-flex;
    margin: 6px;
    background-color: #FD7452;
    color: #ffff;
    border: solid 1px #fd7452e0;
    box-shadow: 2px 1px 2px 0px #00000030;
    border-radius: 64px;
    width: 18px;
    height: 18px;
    justify-content: center;
}

</style>