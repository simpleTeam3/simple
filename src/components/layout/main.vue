<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutMain',
    data(){
        return {
            prefix: this.global.prefix + 'main'
        }
    }
}
</script>