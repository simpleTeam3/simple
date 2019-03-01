<template>
    <li
        :class="liClass"
        :style="liStyle"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @click="onMouseClick"
    >
        <slot></slot>
    </li>
</template>

<script>
import emit from '@/mixins/emit.js';

export default {
    name: 'vutMenuItem',
    inject: ['rootMenu'],
    props: {
        value: [String, Number],
    },
    data () {
        return {
            prefix: this.global.prefix + 'menu-item'
        }
    },
    mixins: [ emit ],
    computed: {
        liClass () {
            return [
                this.prefix,
                {
                    'is-active': this.isActive
                }
            ]
        },
        hoverBackgroundColor () {
            return this.rootMenu.hoverBackgroundColor
        },
        liStyle () {
            return {
                color: this.isActive ? this.rootMenu.activeColor : ''
            }
        },
        isActive () {
            return this.value === this.rootMenu.activeMenu
        }
    },
    methods: {
        onMouseEnter () {
            if(!this.rootMenu.backgroundColor) return;
            this.$el.style.backgroundColor = this.hoverBackgroundColor;
        },
        onMouseLeave () {
            if(!this.rootMenu.backgroundColor) return;
            this.$el.style.backgroundColor = this.rootMenu.backgroundColor;
        },
        onMouseClick () {
            this.dispatch('vutMenu', 'itemClick', this.value)
        }
    }
}
</script>