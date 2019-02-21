<template>
	<div>
		<div class="demo-list">
			<div class="title">input组件实例</div>
			<vut-input size="small" disabled></vut-input>
			<vut-input v-model="inputValue"></vut-input>
			<vut-input size="large"></vut-input>
			<vut-input placeholder="测试组件" type="textarea"></vut-input>
			<vut-input 
			placeholder="按回车键试试" 
			:hide-border=true 
			@on-enter="enterFn" 
			@on-focus="focusFn"
			@on-blur="blurFn"
			@on-change="changeFn"
			class="demo-input"
			></vut-input>
			<p>
				<vut-input placeholder="请输入内容">
					<span slot="prepend">https://</span>
					<span slot="append">.com</span>
				</vut-input>
			</p>
		</div>
		<!-- API -->
		<div class="demo-list">
			<div class="title">API</div>
			<h3 class="api-label">Input props</h3>
			<vut-table :columns="props" :data="propsData" border></vut-table>

			<h3 class="api-label">Input slot</h3>
			<vut-table :columns="slot" :data="slotData" border></vut-table>
			
			<h3 class="api-label">Input events</h3>
			<vut-table :columns="events" :data="eventsData" border></vut-table>
		</div>
	</div>
</template>
<script>
    import {APIprops, APIslot, APIevents} from '../common/common'
	import {propsData, slotData, eventsData} from '../data/API/components/input'
	export default {
		data(){
			return {
				props: APIprops,
				propsData: propsData,
				slot: APIslot,
				slotData: slotData,
				events: APIevents,
				eventsData: eventsData,
				inputValue: "双向数据绑定"
			}
		},
		watch: {
			inputValue(val) {
				alert(val);
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
			},
			changeFn() {
				console.log("数据变动了");
			}
		}
	}
</script>
<style>
	p{
		margin: 10px 0px;
	}
</style>