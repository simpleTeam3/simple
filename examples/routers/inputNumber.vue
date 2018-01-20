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
			<vut-input-number v-model="value1" :min="1" :step="0.2" size="small" :precision=2></vut-input-number>
      		<vut-input-number v-model="value2" :min="1" :step="0.33"></vut-input-number>
			<vut-input-number v-model="value3" :max="100" :min="90" :step="2" size="large" disabled></vut-input-number>
			<vut-input-number v-model="value4" :max="100" :min="0" :step="2" readonly></vut-input-number>
			<p></p>
			<vut-input-number v-model="value5" :min="0" :step="2" controls-position="edge"></vut-input-number>
			<vut-input-number v-model="value6" :min="0" :step="2" controls-position="edge" disabled></vut-input-number>
			<vut-input-number v-model="value7" :min="0" :step="2" controls-position="edge" size="small"></vut-input-number>
			<vut-input-number v-model="value8" :min="0" :step="2" controls-position="edge" size="large"></vut-input-number>
			<vut-input-number v-model="value9" :min="0" :step="2" controls-position="edge" size="small" hide-controls></vut-input-number>
		</div>
		<!-- API -->
		<div class="demo-list">
			<div class="title">API</div>
			<h3 class="api-label">InputNumber props</h3>
			<vut-table :columns="props" :data="propsData" border></vut-table>

			<h3 class="api-label">Input events</h3>
			<vut-table :columns="events" :data="eventsData" border></vut-table>
		</div>
	</div>
</template>
<script>
	import {APIprops, APIevents} from '../common/common'
	import {propsData, eventsData} from '../data/API/components/inputNumber'

	export default {
		data(){
			return {
				value: 10,
				value1: 10,
				value2: 10,
				value3: 93,
				value4: 10,
				value5: 0,
				value6: 0,
				value7: 0,
				value8: 0,
				value9: 0,
				props: APIprops,
				propsData: propsData,
				events: APIevents,
				eventsData: eventsData
			}
		},
		mounted() {
			window.Simple = this;
		},
		methods: {

		}
	}
</script>
