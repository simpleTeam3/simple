<template>
    <div :class="prefix">
        <slot></slot>
        <sup
            v-show="visible"
            :class="[
                prefix + '-content',
                $slots.default ? prefix + '-attach' : '',
                dot ? prefix + '-dot' : ''
            ]"
            v-text="content"
        ></sup>
    </div>
</template>
<script>
export default {
    name: 'vutBadge',

    props: {
        value: [Number, String],
        dot: Boolean,
        maxValue: Number,
        hidden: Boolean
    },

    data(){
        return {
            prefix: this.global.prefix + "badge"
        }
    },

    computed: {
        content() {
            if(this.dot) return;

            if(typeof this.value === 'number' && typeof this.maxValue === 'number') {
                return this.value > this.maxValue ? `${maxValue}+` : value
            }

            return this.value;
        },
        visible() {
            return !this.hidden && (this.content || this.content === 0 || this.dot)
        }
    }
}
</script>