<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutLayout',
    data(){
        return {
            prefix: this.global.prefix + 'layout'
        }
    },
    computed: {
        layoutClass(){
            return [
                this.prefix,
                
            ]
        }
    }
}
</script>