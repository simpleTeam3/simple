<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
export default {
    name: 'vutForm',
    data() {
        return {
            formItemList: []
        }
    },
    created() {
        this.$on('on-form-item-add', this.handleAddItem);
        this.$on('on-form-item-remove', this.handleRemoveItem);
    },
    methods: {
        handleAddItem(item) {
            this.formItemList.push(item);
        },
        handleRemoveItem(item) {
            this.formItemList.splice(this.formItemList.indexOf(item), 1);
        }
    }
}
</script>
