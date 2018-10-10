<template>
    <vut-button @click="notifyOne">试试</vut-button>
</template>
<script>
export default {
    methods: {
        notifyOne(){
            this.$notify({
                title: '在干嘛'
            });
        }
    }
}
</script>
