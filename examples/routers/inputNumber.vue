<style>
	p{
		margin: 10px 0px;
	}
</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">inputNumber组件实例</div>
			<vut-input-number v-model="value" :min="1" :step="0.2" size="small" hide-controls></vut-input-number>
      		<vut-input-number v-model="value2" :min="1" :step="0.33"></vut-input-number>
			<vut-input-number v-model="value3" :max="100" :min="90" :step="2" size="large" disabled></vut-input-number>
			<vut-input-number v-model="value4" :max="100" :min="0" :step="2" readonly></vut-input-number>
			<vut-input-number v-model="value5" :max="100" :min="0" :step="2" controls-position="edge"></vut-input-number>
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
				value: 10,
				value2: 10,
				value3: 105,
				value4: 10,
				value5: 0
			}
		},
		mounted() {
			window.Simple = this;
		},
		methods: {

		}
	}
</script>
