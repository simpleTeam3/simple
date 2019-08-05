<template>
    <div>
        <vut-radio v-model="city" label="1">深圳</vut-radio>
        <vut-radio v-model="city" label="2">广州</vut-radio>
        <vut-radio v-model="city" label="3">上海</vut-radio>
        <vut-radio v-model="city" label="4">北京</vut-radio>
        <vut-radio-group v-model="target">
            <vut-radio label="lufei">路飞</vut-radio>
            <vut-radio label="namei">娜美</vut-radio>
            <vut-radio label="suolong">索隆</vut-radio>
        </vut-radio-group>
    </div>
</template>
<script>
export default {
    data(){
        return {
            city : "1",
            target: 'lufei'
        }
    }
}
</script>