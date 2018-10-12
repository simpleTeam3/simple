<template>
    <div 
        :class="prefix + '-wrap'" v-show="visible" v-on:click.self="cancel">
        <div :class="prefix" :style="modalStyle">
            <h4 :class="prefix + '-header'">
                {{title}}
                <i :class="['vut-icon-close', prefix + '-close']" @click="cancel"></i>
            </h4>
            <div :class="prefix + '-content'">
                <span v-if="!$slots.default">{{content}}</span>
                <slot></slot>
            </div>
            <div :class="prefix + '-footer'">
                <div v-if="!$slots.footer" :class="prefix+ '-button-group'">
                    <vut-button @click="cancel">取消</vut-button>
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
        title: '',
        content: '',
        visible: {
            type: Boolean,
            default: false
        },
        width: {
            type: [Number, String],
            default: 350
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'modal'
        }
    },
    computed: {
        modalStyle(){
            return {
                width: this.width + 'px'
            }
        }
    },
    methods: {
        cancel(e){
            e.stopPropagation();
            this.$emit('cancel',e);
            this.$emit('update:visible', false)
        },
        confirm(){

        }
    }
} 
</script>