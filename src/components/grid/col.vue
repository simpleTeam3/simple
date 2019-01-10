<template>
    <div :class="colClass" :style="colStyle">
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
        colClass(){
            return [
                this.prefix,
                `${this.prefix}-${this.span}`
            ]
        },
        gutter(){
            let parent = this.$parent;
            return parent.$options.name === "vutRow" ? parent.gutter : 0;
        },
        colStyle(){
            return {
                paddingLeft: this.gutter/2 + 'px',
                paddingRight: this.gutter/2 + 'px',
            }
        }
    }
}
</script>
