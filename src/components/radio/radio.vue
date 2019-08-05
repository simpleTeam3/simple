<template>
    <label :class="prefix">
        <span :class="inputClass">
            <span :class="prefix + '-inner'"></span>
            <input type="radio" :class="prefix + '-original'" :value="label" v-model="checkActive"/>
        </span>
        <span :class="prefix + '-label'">
            <slot></slot>
        </span>
    </label>
</template>
<script>
import emit from '../../mixins/emit';

const prefix = 'vut-radio'
export default {
    name: 'vut-radio',
    props: {
        value: {
            test: "ggg",
        },
        label: {}
    },
    mixins: [emit],
    data(){
        return {
            prefix,
            model: ''
        }
    },
    computed: {
        inputClass() {
            return [
                this.prefix + '-input',
                {
                    'is-checked': this.isGroup ? this.model === this.label : this.value === this.label
                }
            ]
        },
        checkActive: {
            get: function(){
                return this.value;
			},
			set: function(newValue){
                this.$emit('input', newValue);
                // 如果有group父组件，由Group触发校验
                if (this.isGroup) {
                    this.dispatch('vutRadioGroup', 'on-change', newValue);
                } else {
                    this.dispatch('vutForm', 'on-change-item', newValue);
                }
			}
        },
        isGroup() {
            let parent = this.$parent;

            while (parent) {
                if (parent.$options.name === 'vutRadioGroup') {
                    this._radioGroup = parent;
                    return true;
                } else {
                    parent = parent.$parent;
                }
            }
            return false;
        }
    }
}
</script>
