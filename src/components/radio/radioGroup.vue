<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutRadioGroup',
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            model: this.value
        }
    },
    mounted() {
        this.$on('on-change', this.handleChange);
        this.updateChild();
    },
    methods: {
        updateChild() {
            this.$children.forEach((c) => {
                c.model = this.model
            })
        },
        handleChange(val) {
            this.model = val;
            this.updateChild();
        }
    }
}
</script>