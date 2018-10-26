<template>
    <div :class="prefix" :style="{width: width + 'px'}" @blur="closeDropdown">
        <vut-input
            :readonly="true"
            :size="size"
            :suffixIcon="suffixIcon"
            @click.stop.native="openDropdown"
            :value="activeLabel"
        ></vut-input>
        <transition name="vut-zoom-in-top">
            <vut-select-dropdown v-show="visible">
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
                suffixIcon: 'bottom-arrow',
                visible: false,
                activeLabel: "",
                activeValue: ""
            }
        },
        computed: {

        },
        mounted(){
            this.$on('select', this.beSelect)
        },
        components: {
            VutInput
        },
        methods: {
            openDropdown(){
                this.visible = true;
            },
            closeDropdown(){
                // this.visible = false;
            },
            beSelect(payload){ 
                this.activeLabel = payload.label;
                this.activeValue = payload.value;
                this.visible = false;
            }
        }
    }
</script>