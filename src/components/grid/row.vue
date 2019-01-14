<template>
    <div :class="rowClass" >
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
        },
        justify: String
    },
    data(){
        return {
            prefix: this.global.prefix + 'row'
        }
    },
    computed: {
        rowClass(){
            let baseName = this.flex ? this.prefix + '-flex' : this.prefix;
            return [
                baseName,
                (this.flex && this.justify) ? `${baseName}-${this.justify}` : ""
            ]
        }
    }
}
</script>