<template>
    <div :class="prefix" :style="{width: width + 'px'}">
        <vut-input
            :readonly="true"
            :size="size"
            :suffixIcon="suffixIcon"
        ></vut-input>
        <transition>
            <vut-select-dropdown>
                <slot></slot>
            </vut-select-dropdown>
        </transition>
    </div>
</template>
<script>
    import VutInput from '../input';
    export default {
        name: 'vutSelect',
        props: {
            size: {
                type: String,
                default: 'smaller'
            },
            width: Number
        },
        data(){
            return{
                prefix: this.global.prefix + 'select',
                suffixIcon: 'bottom-arrow'
            }
        },
        computed: {

        },
        components: {
            VutInput
        },
        method: {

        }
    }
</script>