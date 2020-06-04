<template>
    <div :class="prefix" :style="{width: width + 'px'}" @blur="closeDropdown">
        <vut-input
            :readonly="readonly"
            :size="size"
            :suffixIcon="suffixIcon"
            @click.stop.native="openDropdown"
            v-model="activeLabel"
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
    import emit from '../../mixins/emit';
    export default {
        name: 'vutSelect',
        mixins: [emit],
        props: {
            size: {
                type: String,
                default: 'smaller'
            },
            width: Number,
            filterable: Boolean
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
            readonly() {
                return !this.filterable
            }
        },
        mounted(){
            this.$on('select', this.beSelect)
        },
        components: {
            VutInput
        },
        watch: {
            activeLabel: function (newVal, preVal) {
                console.log(newVal, preVal)
            } 
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
                this.dispatch('vutForm', 'on-change-item', payload);
            }
        }
    }
</script>