<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
import emit from '../../mixins/emit';

export default {
    name: 'vutCheckboxGroup',
    props: {
        value: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            model: this.value
        }
    },
    mixins: [emit],
    created() {
        this.$on('on-check', this.onCheck)
    },
    mounted() {
        this.updateChildModel();
    },
    methods: {
        updateChildModel() {
            this.$children.forEach(child => {
                child.model = this.model;
            })
        },
        onCheck(label) {
            if (this.model.includes(label)) {
                this.model = this.model.filter(v => v !== label)
            } else {
                this.model = this.model.concat([label]);
            }
            this.updateChildModel();

            // 由checkboxGroup 触发 formItem 校验
            this.dispatch('vutFormItem', 'on-change-form', this.model)
        }
    }
}
</script>