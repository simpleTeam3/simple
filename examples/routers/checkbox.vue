<template>
    <div>
        <vut-checkbox v-model="checked1">美丽</vut-checkbox>
        <vut-checkbox v-model="checked2">世界</vut-checkbox>
        <vut-checkbox v-model="checked3">孤儿</vut-checkbox>
        <vut-checkbox-group v-model="most">
            <vut-checkbox label="life">生活</vut-checkbox>
            <vut-checkbox label="cause">因你</vut-checkbox>
            <vut-checkbox label="fire">而火热</vut-checkbox>
        </vut-checkbox-group>
    </div>
</template>

<script>
export default {
    data(){
        return {
            checked1: true,
            checked2: false,
            checked3: false,
            most: []
        }
    }
}
</script>