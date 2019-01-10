<template>
    <div :class="prefix" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutCol',
    props: {
        span: Number
    },
    data(){
        return {
            prefix: this.global.prefix + 'col'
        }
    },
    computed: {
        colStyle(){
            return {
                flexGrow: this.span
            }
        }
    }
}
</script>
