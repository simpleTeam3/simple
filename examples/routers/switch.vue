<style>

</style>
<template>
	<div>
		<div class="demo-list">
			<div class="title">switch组件实例</div>
			<vut-switch v-model="switchValue" @on-change="changeSwitch" size="large"></vut-switch>
			<vut-switch v-model="switchValue" @on-change="changeSwitch"></vut-switch>
			<vut-switch v-model="switchValue" @on-change="changeSwitch" size="small"></vut-switch>
			<p>
				<vut-switch @on-change="changeSwitch" on-color="#13ce66" off-color="#ff4949" size="large">
					<span slot="on">开启</span>
					<span slot="off">关闭</span>
				</vut-switch>
				<vut-switch size="small">
					<span slot="on">开</span>
					<span slot="off">关</span>
				</vut-switch>
				<vut-switch on-text="ON" off-text="OFF" disabled>
				</vut-switch>
			</p>
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
