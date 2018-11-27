<template>
    <vut-tree :data="tree"></vut-tree>
</template>

<script>
export default {
    data(){
        return {
            tree: [{
                label: '平安',
                children: [{
                    label: '科技'
                },{
                    label: '银行'
                }]
            },{
                label: '一会是风'
            }]
        }
    }
}
</script>

<style>

</style>
