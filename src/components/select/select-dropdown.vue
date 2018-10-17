<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vut-select-dropdown',
    data(){
        return {
            prefix: this.global.prefix + 'select-dropdown'
        }
    }
}
</script>