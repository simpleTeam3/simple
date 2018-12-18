<template>
    <ul>
        <li v-for="file in files" :key="file.uid">
            <img />
            <a>{{file.name}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "vutUploadList",

    props: {
        fileList: {
            type: Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            files: this.fileList
        }
    },
    watch: {
        fileList(newVal){
            this.files = newVal;
        }
    },
    methods: {
        getFileUrl(file, index){
            const reader = new FileReader();

            reader.onLoad = function(e) {
                imgFile = e.target.result;
            }

            reader.readAsDataURL(file)
        }
    }
}
</script>