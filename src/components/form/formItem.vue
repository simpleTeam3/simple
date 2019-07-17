<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
    </div>
</template>
<script>
import emit from '../../mixins/emit.js';

export default {
    name: 'vutFormItem',
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    },
    mixins: [ emit ],
    mounted() {
        this.dispatch('vutForm', 'on-form-item-add', this);
    }
}
</script>