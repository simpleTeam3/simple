<template>
    <div :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutCol',
    props: {
        span: Number,
        offset: Number
    },
    data(){
        return {
            prefix: this.global.prefix + 'col'
        }
    },
    computed: {
        colClass(){
            let classList = [
                this.prefix,
                `${this.prefix}-${this.span}`,
            ]
            if(this.offset && this.offset !== 0){
                classList.push(`${this.prefix}-offset-${this.offset}`);
            }
            return classList;
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
