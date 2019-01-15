<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vutSidebar',
    data(){
        return {
            prefix: this.global.prefix + 'sidebar'
        }
    }
}
</script>
