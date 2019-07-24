<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutCheckboxGroup',
    data() {
        return {
            values: []
        }
    },
    created() {
        this.$on('on-check', this.onCheck)
    },
    methods: {
        updateChildModel() {
            this.$children.forEach(child => {
                child.model = this.values;
            })
        },
        onCheck(label) {
            if (this.values.includes(label)) {
                this.values = this.values.filter(v => v !== label)
            } else {
                this.values = this.values.concat([label]);
            }
            this.updateChildModel();
        }
    }
}
</script>