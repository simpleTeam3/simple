<template>
    <div :class="checkboxClass" @click="triggerCheck">
        <div :class="inputClass">
            <div :class="prefix+'-inner'"></div>
            <input type="checkbox" v-show="false"/>
        </div>
        <div :class="prefix+'-label'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vutCheckbox',
    props:{
        value:{}
    },
    data(){
        return {
            prefix: this.global.prefix + 'checkbox'
        }
    },
    computed: {
        checkboxClass(){
            return [
                this.prefix,
                {'is-checked': this.value}
            ]
        },
        inputClass(){
            return [
                this.prefix + '-input',
                {'is-checked': this.value}
            ]
        }
    },
    methods: {
        triggerCheck(){
            this.$emit('input', !this.value);
        }
    }
}
</script>

<style>

</style>
