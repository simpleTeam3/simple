<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutRow',
    data(){
        return {
            prefix: this.global.prefix + 'row'
        }
    }
}
</script>