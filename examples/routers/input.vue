<style>
	
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
				border 
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