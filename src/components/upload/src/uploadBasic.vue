<template>
    <div @click="fileUpload">
        <slot></slot>
        <input type="file" ref="input" :class="prefix" @change="handleInputChange" />
    </div>
</template>

<script>
export default {
    name: "vutUploadBasic",
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
            const file = event.target.file;
            if(!file) return;
        }
    }
}
</script>
