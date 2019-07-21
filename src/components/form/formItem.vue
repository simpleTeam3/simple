<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
    </div>
</template>
<script>
import AsyncValidator from 'async-validator';
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
    data() {
        return {
            validateStatus: '',
            validateMessage: ''
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
        getRules() {
            let formRules = this.props.form.rules;
            itemRules = formRules ? formRules[this.prop] : []
            return [].concat(formRules || []);
        },
        filterTriggerRule(trigger) {
            return this.getRules().filter(r => {
                return !r.trigger || r.trigger.index(trigger) !== -1
            })
        },
        validate(trigger, callback = function() {}) {
            const rules = this.filterTriggerRule(trigger);

            if (!rules || rules.length === 0) {
                return true;
            }

            this.validateStatus = 'validating';
            let descriptor = {};
            descriptor[this.prop] = rules;
            const validator = new AsyncValidator(descriptor);
            let model = {};
            model[this.prop] = this.fieldValue;
            validator.validate(model, {firstField: true}, error => {
                this.validateStatus = !errors ? 'success' : 'error';
                this.validateMessage = errors ? errors[0].message : '';

                callback(this.validateMessage);
            })
        }
    }
}
</script>