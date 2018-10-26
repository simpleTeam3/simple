<template>
    <div :class="prefix">
        <div :class="prefix + '-main'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vutCarousel',
    data(){
        return {
            prefix: this.global.prefix + 'carousel'
        }
    }
}
</script>
