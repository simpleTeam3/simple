<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutRow',
    props: {
        gutter: Number,
        flex: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'row'
        }
    },
    computed: {
        rowClass(){
            return [
                this.prefix,
                this.flex ? this.prefix + 'flex' : ""
            ]
        }
    }
}
</script>