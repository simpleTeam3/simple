<template>
	<div>
		<div class="demo-list">
			<div class="title">button组件实例</div>
			<vut-button>普通按钮</vut-button>
			<vut-button type="primary">主要按钮</vut-button>
			<vut-button type="success">成功按钮</vut-button>
			<vut-button type="warning">警告按钮</vut-button>
			<vut-button type="error">错误按钮</vut-button>
		</div>
		<div class="demo-list">
			<vut-button plain>朴素按钮</vut-button>
			<vut-button type="primary" plain>主要按钮</vut-button>
			<vut-button type="success" plain>成功按钮</vut-button>
			<vut-button type="warning" plain>警告按钮</vut-button>
			<vut-button type="error" plain>错误按钮</vut-button>
		</div>
		<div class="demo-list">
			<vut-button disabled>禁止按钮</vut-button>
			<vut-button type="primary" disabled>主要按钮</vut-button>
			<vut-button type="success" disabled>成功按钮</vut-button>
			<vut-button type="warning" disabled>警告按钮</vut-button>
			<vut-button type="error" disabled>错误按钮</vut-button>
		</div>
		<div class="demo-list">
			<vut-button type="text">文字按钮</vut-button>
			<vut-button type="text" disabled>文字禁用按钮</vut-button>
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
<style>
	
</style>