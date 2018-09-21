<template>
    <div
        :class="prefix"
        v-show="visibled"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutTabPanel',
    props: {
        label: String,
        name: String,
    },
    data(){
        return {
            prefix: `${this.global.prefix}tab-panel`
        }
    },
    computed: {
        visibled(){
            return (this.name == this.$parent.activeValue || this.$parent.animated);
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
