<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
    </div>
</template>
<script>
import async from 'async-validator';
import emit from '../../mixins/emit.js';

export default {
    name: 'vutFormItem',
    reject: ['form'],
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
    computed: {
        fieldValue() {
            return this.form.model[this.prop]
        }
    },
    mounted() {
        this.dispatch('vutForm', 'on-form-item-add', this);
    },
    destroyed() {
        this.dispatch('vutForm', 'on-form-item-remove', this);
    },
    methods: {
        
    }
}
</script>