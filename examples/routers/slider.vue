<template>
    <div>
        <div class="sliderBox">
            <span>{{v1}}</span>
            <vut-slider v-model="v1"></vut-slider>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            v1: 23
        }
    }
}
</script>
<style>
.sliderBox{
    width:500px;
}
</style>
