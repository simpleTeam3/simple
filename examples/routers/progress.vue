<template>
    <div>
        <vut-input v-model="value"></vut-input>
        <div class="progressBox">
            <vut-progress :value="value"></vut-progress>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            value: 25
        }
    }
}
</script>
<style>
    .progressBox{
        width: 400px;
    }
</style>