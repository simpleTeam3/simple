<style>
	.content{
		width: 85%;
		margin: 30px auto;
	}
	.demo-list{
		margin: 30px 0px;
	}
	.title{
		margin-bottom: 18px;
		height: 50px;
		line-height: 20px;
		padding: 15px;
		border-color: #e2e2e2;
		border-style: solid;
    	border-width: 1px 1px 1px 5px;
	}
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">table组件实例</div>
            <vut-table :data="tableData"></vut-table>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				tableData: [
					{
						name: 'cn',
						age: 68
					}
				]
			}
		}
	}
</script>
