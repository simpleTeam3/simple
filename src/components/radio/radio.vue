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
            prefix
        }
    },
    methods: {
        handleInput: function(e){
            this.$emit('input', e.target.value);
            this.dispatch('vutForm', 'on-change-item', e.target.value);
        }
    },
    computed: {
        checkActive: {
            get: function(){
                return this.value;
			},
			set: function(newValue){
                this.$emit('input', newValue);
                this.dispatch('vutForm', 'on-change-item', newValue);
			}
        }
    }
}
</script>
