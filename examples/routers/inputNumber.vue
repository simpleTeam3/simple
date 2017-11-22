<style>
	p{
		margin: 10px 0px;
	}
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">inputNumber组件实例</div>
      <vut-input-number v-model="value"></vut-input-number>
		</div>
		<!-- API -->
		<!-- <div class="demo-list">
			<div class="title">API</div>
			<h3 class="api-label">Input props</h3>
			<vut-table :columns="props" :data="propsData" border></vut-table>

			<h3 class="api-label">Input slot</h3>
			<vut-table :columns="slot" :data="slotData" border></vut-table>

			<h3 class="api-label">Input events</h3>
			<vut-table :columns="events" :data="eventsData" border></vut-table>
		</div> -->
	</div>
</template>
<script>
	export default {
		data(){
			return {
				value: 0
			}
		},
		methods: {

		}
	}
</script>
