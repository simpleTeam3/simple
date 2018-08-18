<template>
    <label :class="prefix">
        <span :class="[
            prefix + '-input',
            {
                'is-checked' : value == label,
            }
        ]">
            <span :class="prefix + '-inner'"></span>
            <input type="radio" :class="prefix + '-original'" :value="label" v-model="checkActive"/>
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
        value: {
            test: "ggg",
        },
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
    },
    computed: {
        checkActive: {
            get: function(){
                return this.value;
			},
			set: function(newValue){
				this.$emit('input', newValue);
			}
        }
    }
}
</script>
