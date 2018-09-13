<template>
	<div class="vut-tag-page">
		<vut-tag v-for="tag in tags" :type="tag.type">{{tag.name}}</vut-tag>
	</div>
</template>
<script>
 export default {
	 data(){
		 return {
			 tags: [
                {name: "标签", type: ""},
                {name: "成功标签", type: "success"},
                {name: "信息标签", type: "info"},
                {name: "警告标签", type: "warning"},
                {name: "错误标签", type: "error"},
            ]
		 }
	 }
 }
</script>
<style>
.vut-tag-page .vut-tag+.vut-tag{
	margin-left: 10px;
}
</style>