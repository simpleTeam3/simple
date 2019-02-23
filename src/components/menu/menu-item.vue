<template>
    <li
        :class="prefix"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'vutMenuItem',
    inject: ['rootMenu'],
    data () {
        return {
            prefix: this.global.prefix + 'menu-item'
        }
    },
    computed: {
        hoverBackgroundColor () {
            return this.rootMenu.hoverBackgroundColor
        },
    },
    methods: {
        onMouseEnter () {
            if(!this.rootMenu.backgroundColor) return;
            this.$el.style.backgroundColor = this.hoverBackgroundColor;
        },
        onMouseLeave () {
            if(!this.rootMenu.backgroundColor) return;
            this.$el.style.backgroundColor = this.rootMenu.backgroundColor;
        }
    }
}
</script>