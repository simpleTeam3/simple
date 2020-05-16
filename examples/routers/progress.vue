<template>
    <div>
        <vut-input v-model="value"></vut-input>
        <div class="progress-box">
            <vut-progress :value="value"></vut-progress>
            <vut-progress value="75" color="#BB1"></vut-progress>
            <vut-progress value="75" text-inside strokeWidth="20"></vut-progress>
        </div>
        <div class="progress-box-circle">
            <vut-progress :value="value" type="circle"></vut-progress>
            <vut-progress value="100" type="circle"></vut-progress>
            <vut-progress value="75" type="circle" color="#BB1"></vut-progress>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            value: "25"
        }
    }
}
</script>
<style>
    .progress-box {
        width: 400px;
        margin-top: 20px;
    }
    .progress-box-circle {
        margin-top: 20px;
        width: 100%;
    }
</style>