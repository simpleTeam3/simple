<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutHeader',
    data(){
        return {
            prefix: this.global.prefix + 'header'
        }
    }
}
</script>
