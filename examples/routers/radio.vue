<template>
    <div>
        <vut-radio v-model="city" label="1">深圳</vut-radio>
        <vut-radio v-model="city" label="2">广州</vut-radio>
        <vut-radio v-model="city" label="3">上海</vut-radio>
        <vut-radio v-model="city" label="4">北京</vut-radio>
    </div>
</template>
<script>
export default {
    data(){
        return {
            city : "1"
        }
    }
}
</script>