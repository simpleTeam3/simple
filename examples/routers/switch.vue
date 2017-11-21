<style>

</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">switch组件实例</div>
			<vut-switch v-model="switchValue" @on-change="changeSwitch" size="large"></vut-switch>
			<vut-switch v-model="switchValue" @on-change="changeSwitch" on-color="#13ce66" off-color="#ff4949"></vut-switch>
			<vut-switch v-model="switchValue" @on-change="changeSwitch" size="small"></vut-switch>
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
				switchValue: true
			}
		},
		methods: {
			changeSwitch(value) {
				// alert(value)
			}
		}
	}
</script>
