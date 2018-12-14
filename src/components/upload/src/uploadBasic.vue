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
            prefix: this.global.prefix + 'upload-basic'
        }
    },
    methods: {
        fileUpload(){
            this.$refs.input.click();
        },
        handleInputChange(event){
            console.log(event);
            const files = event.target.files ;
            if(!files) return;
        },
        uploadFiles(files){
            
        },
        post(file){
            const options = {
                action: this.action
            }
            this.http(options);
        }
    }
}
</script>
