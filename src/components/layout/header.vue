<template>
    <header :class="prefix">
        <slot></slot>
    </header>
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
