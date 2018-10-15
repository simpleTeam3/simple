<template>
    <transition :name="transitionAbled ? '' : 'vut-fade' ">
        <span :class="[
                prefix,
                type ? prefix+'-'+type : '',
                size ? prefix+ '-' + size: ''
            ]"
            v-if="visible"
        >
            <slot></slot>
            <i 
                v-if="closeable"
                class="vut-tag-icon vut-icon-close"
                @click="closeTag"
            ></i>
        </span>
    </transition>
</template>

<script>
const prefix = "vut-tag";
export default {
    name: "vut-tag",
    props: {
        closeable: Boolean,
        type: String,
        transitionAbled: Boolean,
        index: Number,
        size: String
    },
    data(){
        return {
            prefix,
            visible: true,
        }
    },
    methods: {
        closeTag(event){
            this.visible = false;
            this.$emit('close', event, this.index);
        }
    }
}
</script>