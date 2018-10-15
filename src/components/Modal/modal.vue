<template>
    <div 
        :class="prefix + '-wrap'" v-show="visible" v-on:click.self="closeModal">
        <div :class="prefix" :style="modalStyle">
            <h4 :class="prefix + '-header'">
                {{titleValue}}
                <i :class="['vut-icon-close', prefix + '-close']" @click="handleCancel"></i>
            </h4>
            <div :class="prefix + '-content'">
                <span v-if="!$slots.default">{{contentValue}}</span>
                <slot></slot>
            </div>
            <div :class="prefix + '-footer'">
                <div v-if="!$slots.footer" :class="prefix+ '-button-group'">
                    <vut-button @click="handleCancel">取消</vut-button>
                    <vut-button type="primary" @click="confirm">确定</vut-button>
                </div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vutModal',
    props: {
        modalTitle: '',
        modalContent: '',
        visible: {
            type: Boolean,
            default: false
        },
        width: {
            type: [Number, String],
            default: 350
        },
        maskDisclosed: Boolean,
        ok: Function,
        cancel: Function
    },
    data(){
        return {
            prefix: this.global.prefix + 'modal',
            title: '',
            content: '',
            show: false,
        }
    },
    computed: {
        modalStyle(){
            return {
                width: this.width + 'px'
            }
        },
        titleValue(){
            return this.title || this.modalTitle;
        },
        contentValue(){
            return this.content || this.modalContent;
        }
    },
    methods: {
        closeModal(){
            this.maskDisclosed || this.$emit('update:visible', false);
            this.maskDisclosed || this.close();
        },
        handleCancel(e){
            this.$emit('cancel',e);
            this.$emit('update:visible', false);
            this.onCancel && this.onCancel();
        },
        confirm(){

        }
    }
} 
</script>