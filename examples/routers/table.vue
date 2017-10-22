<style>
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">table组件实例</div>
            <vut-table :columns="columns" :data="tableData" size="large" stripe :show-header=true></vut-table>
		</div>
		<div class="demo-list">
			<div class="title">API</div>
			<h3 class="api-label">Table props</h3>
			<vut-table :columns="APIcolumns" :data="APIData" border></vut-table>
		</div>
	</div>
</template>
<script>
    import dataJson from '../data/API/components/table';
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
				APIData: dataJson
			}
		}
	}
</script>
