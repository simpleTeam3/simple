<template>
    <ul :class="menuClass" :style="menuStyle">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name: 'vutMenu',
    props: {
        bgColor: String,
        textColor: String,
        mode: String
    },
    data () {
        return {
            prefix: this.global.prefix + 'menu'
        }
    },
    computed: {
        menuClass () {
            return [
                this.prefix,
                this.mode == 'horizontal' ? this.prefix + '-horizontal' : ''
            ]
        },
        menuStyle () {
            let style = {};
            this.bgColor && (style.backgroundColor = this.bgColor);
            this.textColor && (style.color = this.textColor)

            return style;
        }
    }
}
</script>
