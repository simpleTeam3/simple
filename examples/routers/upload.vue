<template>
    <vut-upload 
        :multiple="true"
        action=""
        :on-success="uploadSuc"
    >
        <vut-button>点击上传</vut-button>
    </vut-upload>
</template>

<script>
export default {
    methods: {
        uploadSuc(){
            console.log("上传成功啦");
        }
    }
}
</script>
