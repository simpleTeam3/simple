<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutCarouselItem',
    data(){
        return {
            prefix: this.global.prefix + 'carousel-item'
        }
    }
}
</script>
