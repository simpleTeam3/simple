<style>
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">table组件实例</div>
            <vut-table :columns="columns" :data="tableData" size="large"></vut-table>
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
					}
				]
			}
		}
	}
</script>
