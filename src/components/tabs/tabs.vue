<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutTabs',
    data(){
        prefix: this.prefix + 'tabs'
    }
}
</script>
