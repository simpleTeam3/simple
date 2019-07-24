<template>
    <div :class="checkboxClass" @click="triggerCheck">
        <div :class="inputClass">
            <div :class="prefix+'-inner'"></div>
            <input
                v-if="isGroup"
                type="checkbox"
                v-show="false"

            />
            <input v-else type="checkbox" v-show="false" :check="value"/>
        </div>
        <div :class="prefix+'-label'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import emit from '../../mixins/emit';

export default {
    name: 'vutCheckbox',
    props:{
        value:{
            type: [String, Boolean, Number],
            default: false
        },
        label: [String, Boolean, Number]
    },
    mixins: [emit],
    data(){
        return {
            prefix: this.global.prefix + 'checkbox',
            model: [],
            currentValue: false
        }
    },
    computed: {
        checkboxClass(){
            return [
                this.prefix,
                {'is-checked': this.isGroup ? this.model.indexOf(this.label) : this.value}
            ]
        },
        inputClass(){
            return [
                this.prefix + '-input',
                {'is-checked': this.isGroup ? this.model.indexOf(this.label) : this.value}
            ]
        },
        isGroup() {
            let parent = this.$parent;

            while(parent) {
                if (parent.$options.componentName !== 'vutCheckboxGroup') {
                    parent = parent.$parent;
                } else {
                    this_checkGroup = parent;
                    return true;
                }
            }
            return false;
        }
    },
    methods: {
        triggerCheck(){
            this.$emit('input', !this.value);
            this.$emit('on-change', !this.value);
            if (this.isGroup) {
                this.dispatch('on-check', this.label);
            } else {
                this.dispatch('on-change-item', !this.value);
            }
            
        }
    }
}
</script>

<style>

</style>
