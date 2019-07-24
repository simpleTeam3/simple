<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
export default {
    name: 'vutForm',
    provide() {
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object
        },
        rules: {
            type: Object
        }
    },
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
        },
        validate(callback) {
            return new Promise((resolve, reject) => {
                let valid = true;
                this.formItemList.forEach((formItem, index) => {
                    formItem.validate('', (errors) => {
                        if (errors) {
                            valid = false;
                        }
                        if (index === this.formItemList.length - 1) {
                            resolve(valid)
                            if(typeof callback === 'function') {
                                callback(valid);
                            }
                        }
                    });
                });
            });
        }
    }
}
</script>
