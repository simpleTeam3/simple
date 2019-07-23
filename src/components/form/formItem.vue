<template>
    <div>
        <label v-if="label" :class="{'vut-form-item-required': required}" >{{label}}</label>
        <slot></slot>
        <div v-if="validateStatus === 'error'">{{validateMessage}}</div>
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
            initialValue: '',
            required: false,
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
        this.initialValue = this.fieldValue;
        this.initRules();
    },
    destroyed() {
        this.dispatch('vutForm', 'on-form-item-remove', this);
    },
    methods: {
        // 初始化监听校验
        initRules() {
            const rules = this.getRules();
            if (rules.length) {
                rules.some(rule => {
                    if (rule.required) {
                        this.required = true;
                        return true;
                    }
                })
            }
            this.$on('on-change-item', this.handleFieldChange);
            this.$on('on-blur-item', this.handleFieldBlur);
        },
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
        },
        // 重置数据及校验状态
        resetField() {
            this.validateStatus = '';
            this.validateMessage = '';
            this.form.model[this.prop] = this.initialValue;
        },
        handleFieldChange(value) {
            this.validate('input');
        },
        handleFieldBlur(value) {
            this.validate('blur');
        }
    }
}
</script>