<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutRow',
    props: {
        gutter: Number
    },
    data(){
        return {
            prefix: this.global.prefix + 'row'
        }
    }
}
</script>