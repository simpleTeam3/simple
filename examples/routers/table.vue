<style>
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">table组件实例</div>
            <vut-table :columns="columns" :data="tableData" size="large"></vut-table>
		</div>
		<div class="demo-list">
			<div class="title">API</div>
			<h3 class="api-label">Table Attributes</h3>
			<vut-table :columns="APIcolumns" :data="APIData"></vut-table>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				columns: [
					{
						prop: "name",
						label: "名称"
					},
					{
						prop: "age",
						label: "年龄"
					},
					{
						prop: "author",
						label: "作者"
					}
				],
				tableData: [
					{
						name: 'Vue',
						age: 4,
						author: "尤雨溪"
					},
					{
						name: 'React',
						age: 4,
						author: "facebook"
					},
					{
						name: 'Angular',
						age: 8,
						author: "Google"
					},
					{
						name: 'jQuery',
						age: 11,
						author: "John Resig"
					},
					{
						name: "Simple",
						age: 1,
						author: "老黄，老烨，小兴"
					}
				],
				APIcolumns: [
					{prop: "props", label: "参数"},
					{prop: "describe", label: "说明"},
					{prop: "type", label: "类型"},
					{prop: "option", label: "可选值"},
					{prop: "default", label: "默认值"},
				],
				APIData: [
					{
						props: "columns", 
						describe: "表格列的配置描述，具体项见后文", 
						type: "Array", 
						option: "—", 
						default: "[ ]"
					},
					{
						props: "data", 
						describe: "显示的结构化数据", 
						type: "Array", 
						option: "—", 
						default: "[ ]"
					},
					{
						props: "size", 
						describe: "表格尺寸", 
						type: "Array", 
						option: "可选值为small， default， large或者不填", 
						default: "default"
					}
				]
			}
		}
	}
</script>
