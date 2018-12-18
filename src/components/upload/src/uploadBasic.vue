<template>
    <div @click="fileUpload">
        <slot></slot>
        <input 
            type="file"
            ref="input"
            :multiple="uploadData.multiple"
            :class="prefix"
            @change="handleInputChange"
        />
    </div>
</template>

<script>
import ajax from './ajax.js';

export default {
    name: "vutUploadBasic",
    props: {
        uploadData: {
            type: Object,
            default(){
                return {}
            }
        },
        http: {
            type: Function,
            default: ajax
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'upload-basic',
        }
    },
    methods: {
        fileUpload(){
            this.$refs.input.click();
        },
        handleInputChange(event){
            const files = event.target.files;
            if(!files) return;
            this.uploadFiles(files);
        },
        //整个文件列表处理
        uploadFiles(files){
            Array.isArray(files);
            let postFiles = Array.prototype.slice.call(files);

            postFiles.forEach(file => {
                this.uploadData.onStart(file);
                if(this.uploadData.autoUpload) this.uploadFile(file);
            })
        },
        //单个文件处理
        uploadFile(file){
            this.post(file);
        },
        //发送文件
        post(file){
            const options = {
                action: this.uploadData.action
            }
            const req = this.http(options);
        }
    }
}
</script>
