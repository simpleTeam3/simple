<template>
    <div :class="cardClass" :style="cardStyle">
        <div :class="prefix + '-header'" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div :class="prefix + '-content'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vutCard',
    props: {
        cardStyle: {},
        bodyStyle: {},
        hoverabled: Boolean
    },
    data(){
        return {
            prefix: this.global.prefix + 'card'
        }
    },
    computed: {
        cardClass(){
            return [
                this.prefix,
                {
                    'hover-shadow': this.hoverabled
                }
            ]
        }
    },
}
</script>