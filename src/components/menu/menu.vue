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
		activeTextColor: String,
        mode: String,
        active: [String, Number]
    },
    data () {
        return {
            prefix: this.global.prefix + 'menu',
            activeMenu: this.active || 1
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
		},
		activeColor () {
			return this.activeTextColor ? this.activeTextColor : '#2d8cf0'
		}
	},
	mounted () {
		this.$on('itemClick', this.changeActive);
	},
	methods: {
		changeActive (itemNum) {
			this.activeMenu = itemNum
		}
	}
}
</script>
