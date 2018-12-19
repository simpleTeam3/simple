<template>
    <ul :class="prefix">
        <li v-for="file in files" :key="file.uid">
            <img v-if="listType !== 'text'" :src="file.url"/>
            <a>{{file.name}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "vutUploadList",

    props: {
        listType: String,
        fileList: {
            type: Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'upload-list',
            files: this.fileList
        }
    },
    watch: {
        fileList(newVal){
            this.files = newVal;
            newVal.forEach((item, index) => {
                this.getFileUrl(item, index)
            })
        }
    },
    methods: {
        //两种方式, createObjectURL有更好的性能
        getFileUrl(file, index){
            const reader = new FileReader();
            let that = this;
            reader.readAsDataURL(file)
            reader.onload = function(e) {
                const imgFile = e.target.result;
                file.url = imgFile;
                that.files.splice(index, 1, file);
            }
        },
    }
}
</script>