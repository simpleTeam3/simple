<template>
    <vut-steps :activeStep="activeStep">
        <vut-step title="小白"></vut-step>
        <vut-step title="菜鸟"></vut-step>
        <vut-step title="熟手"></vut-step>
    </vut-steps>
</template>
<script>
export default {
    data(){
        return {
            activeStep: 1
        }
    }
}
</script>
