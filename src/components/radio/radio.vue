<template>
    <label :class="prefix">
        <span :class="[
            prefix + '-input',
            {
                'is-checked' : value == label,
            }
        ]">
            <span :class="prefix + '-inner'"></span>
            <input type="radio" :class="prefix + '-original'" :value="label" @change="handleInput"/>
        </span>
        <span :class="prefix + '-label'">
            <slot></slot>
        </span>
    </label>
</template>
<script>
const prefix = 'vut-radio'
export default {
    name: 'vut-radio',
    props: {
        value: {},
        label: {}
    },
    data(){
        return {
            prefix
        }
    },
    methods: {
        handleInput: function(e){
            this.$emit('input', e.target.value);
        }
    }
}
</script>
