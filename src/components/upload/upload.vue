<template>
    <div :class="prefix">
        <vut-uploadBasic
            :uploadData="uploadData"
        >
            <slot name="trigger"></slot>
            <slot></slot>
        </vut-uploadBasic>
        <slot name="extra"></slot>
    </div>
</template>
<script>
export default {
    name: "vutUpload",
    props: {
        multiple: Boolean,
        autoUpload: {
            type: Boolean,
            default: true
        },
        action: String
    },
    data(){
        return {
            prefix: this.global.prefix + 'upload',
            uploadData: {
                multiple: this.multiple,
                autoUpload: this.autoUpload,
                action: this.action
            }
        }
    },
    methods: {
    }
}
</script>
