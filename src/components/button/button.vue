<template>
	<button class="test" :type="htmlType">
		<span v-if="showSlot" ref="slot"><slot></slot></span>
	</button>
</template>

<script>
	import { insideOf } from '../../utils/tools.js'
	export default{
		name: 'vutButton',
		props:{
			htmlType:{
				default : 'button',
				validator(value){
					return insideOf(value, ['button', 'submit', 'reset']);
				}
			}
		},
		data(){
			return {

			}
		}
	}
</script>