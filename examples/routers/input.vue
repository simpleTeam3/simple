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
	<div class="content">
        <div class="demo-list">
		    <div class="title">input组件实例</div>
			<vut-input placeholder=""></vut-input>
			<vut-input size="large"></vut-input>
			<vut-input size="small" disabled></vut-input>
			<vut-input placeholder="测试组件" type="textarea"></vut-input>
		</div> 
	</div>
</template>
<script>
	export default {
		data(){
			return {
			}
		}
	}
</script>
<style></style>