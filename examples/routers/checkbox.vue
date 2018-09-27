<template>
    <div>
        <vut-checkbox v-model="checked">美丽</vut-checkbox>
        <vut-checkbox>世界</vut-checkbox>
        <vut-checkbox>孤儿</vut-checkbox>
    </div>
</template>

<script>
export default {
    data(){
        return {
            checked: true
        }
    }
}
</script>
