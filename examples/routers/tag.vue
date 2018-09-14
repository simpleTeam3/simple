<template>
	<div class="vut-tag-page">
		<div>
			<vut-tag v-for="(tag, index) in tags" :type="tag.type" :key="index" :index="index">{{tag.name}}</vut-tag>
		</div>
		<div>
			<vut-tag 
				v-for="(tag, index) in tags" 
				:type="tag.type" 
				:key="index" 
				:index="index" 
				@close="handleClose"
				closeable
			>{{tag.name}}</vut-tag>
		</div>
		<div>
			<vut-tag 
				v-for="(tag, index) in tags" 
				size="small"
				:type="tag.type" 
				:key="index" 
				:index="index" 
				@close="handleClose"
			>{{tag.name}}</vut-tag>
		</div>
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
	},
	methods: {
		handleClose(e, index){
			this.$Message.info("关闭了" + index);
		}
	}
}
</script>
<style>
.vut-tag-page .vut-tag+.vut-tag{
	margin-left: 10px;
}
.vut-tag-page div{
	line-height: 40px;
}
</style>