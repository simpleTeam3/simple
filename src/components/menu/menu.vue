<template>
    <ul :class="menuClass" :style="menuStyle">
        <slot></slot>
    </ul>
</template>
<script>
import { handleColor } from '@/utils/utils';
export default {
    name: 'vutMenu',
    props: {
        backgroundColor: String,
        textColor: String,
        mode: String
    },
    data () {
        return {
            prefix: this.global.prefix + 'menu'
        }
    },
    provide () {
        return {
            rootMenu: this
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
            this.backgroundColor && (style.backgroundColor = this.backgroundColor);
            this.textColor && (style.color = this.textColor)

            return style;
        },
        hoverBackgroundColor(){
            return this.backgroundColor ? handleColor(this.backgroundColor, 0.2) : ''
        }
    }
}
</script>
