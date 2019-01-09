<style scoped>
    img{
		width: 100px;
		height: 100px;
	}
    .table {
        margin: 15px 0px;
    }
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">table组件实例</div>
            <vut-table :columns="columns" :data="tableData" size="large" stripe border class="table"></vut-table>
            <vut-table :columns="columns" :data="tableData" size="small" stripe border class="table"></vut-table>
		</div>
		<div class="demo-list">
			<div class="title">API</div>
			<h3 class="api-label">Table props</h3>
			<vut-table :columns="props" :data="propsData" border stripe></vut-table>
		</div>
	</div>
</template>
<script>
    import {APIprops, APIevents} from '../common/common'
    import {propsData} from '../data/API/components/table';
	export default {
		data(){
			return {
				columns: [
					{
						prop: "name",
						label: "名称",
						width: 100
					},
					{
						prop: "age",
						label: "年龄",
						width: 100
					},
					{
						prop: "author",
						label: "作者",
						width: 300
					},
					{
						prop: "logo",
						label: "logo",
						width: 200,
						render: (h, params) => {
							return h("div", [
								h("span", {
									domProps: {
										innerHTML: "../../../logo-vue.png"
									}
								})
							])
						}
					},
					{
						prop: "action",
						label: "操作",
						align: 'center'
						// render: (h, params) => {
						// 	return h("div", [
						// 		h("vut-button", {
						// 			on: {
						// 				click: () => {
						// 					alert("操作按钮");
						// 				}
						// 			}
						// 		},"编辑"),
						// 		h("vut-button", "删除")
						// 	])
						// }
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
						author: "老黄，老烨，小兴老黄，老烨，小兴老黄，老烨，小兴老黄，老烨，小兴"
					}
				],
				props: APIprops,
				propsData: propsData
			}
		}
	}
</script>
