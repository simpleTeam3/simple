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
    inject: ['activeValue', 'animated'],
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
            return (this.name == this.activeValue || this.animated);
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
