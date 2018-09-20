<template>
    <div
        :class="prefix"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutTabPanel',
    props: {
        label: String,
        name: String
    },
    data(){
        return {
            prefix: `${this.global.prefix}tab-panel`
        }
    },
    mounted(){
        this.updateNav();
    },
    methods: {
        updateNav(){
            this.$parent.updateNav();
        }
    }
}
</script>
