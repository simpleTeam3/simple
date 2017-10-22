<style>
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
