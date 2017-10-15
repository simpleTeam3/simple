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
	.demo-input{width: 200px;}
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">input组件实例</div>
			<vut-input readonly></vut-input>
			<vut-input size="large"></vut-input>
			<vut-input size="small" disabled></vut-input>
			<vut-input placeholder="测试组件" type="textarea"></vut-input>
			<p>
				<vut-input 
				placeholder="按回车键试试" 
				hideborder 
				@on-enter="enterFn" 
				@on-focus="focusFn"
				@on-blur="blurFn"
				class="demo-input"
				></vut-input>
			</p>
		</div>
		<div class="demo-list">
			<div class="title">API</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
			}
		},
		methods: {
			enterFn() {
				alert("组件测试");
			},
			focusFn() {
				console.log("获取了焦点");
			},
			blurFn() {
				console.log("失去了焦点");
			}
		}
	}
</script>
<style></style>