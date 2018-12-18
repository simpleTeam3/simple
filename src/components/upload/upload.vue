<template>
    <div :class="prefix">
        <upload-basic
            :uploadData="uploadData"
        >
            <slot name="trigger"></slot>
            <slot></slot>
        </upload-basic>
        <slot name="extra"></slot>
        <upload-list
            :fileList="uploadFiles"
        ></upload-list>
    </div>
</template>
<script>
import UploadBasic from './src/uploadBasic';
import UploadList from './src/uploadList';

export default {
    name: "vutUpload",
    components: {UploadBasic, UploadList},
    props: {
        multiple: Boolean,
        autoUpload: {
            type: Boolean,
            default: true
        },
        action: String,
        onSuccess: Function,
        onStart: Function
    },
    data(){
        return {
            prefix: this.global.prefix + 'upload',
            uploadData: {
                multiple: this.multiple,
                autoUpload: this.autoUpload,
                action: this.action,
                onStart: this.handleStart
            },
            uploadFiles: []
        }
    },
    methods: {
        handleStart(file){
            this.uploadFiles.push(file);

            this.onStart && this.onStart();
        },
        handleSuccess(){

        },
    }
}
</script>
