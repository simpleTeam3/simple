<template>
    <div :class="prefix">
        <ul :class="prefix + '-list'">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'vutSelectDropdown',
    data(){
        return {
            prefix: this.global.prefix + 'select-dropdown'
        }
    },
    computed: {
    }
}
</script>