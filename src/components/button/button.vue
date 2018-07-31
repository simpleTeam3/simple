<template>
	<button :type="htmlType" :disabled="disabled" 
		:class="[
			prefixClass,
			type ? prefixClass + '-' + type : '',
			size ? prefixClass + '-' + size : '',
			{
				'is-disabled' : disabled,
				'is-plain' : plain
			}
		]"
	>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
	const prefixClass = "vut-button";
	import { insideOf } from '../../utils/tools.js'
	export default{
		name: 'vutButton',
		props:{
			type: {
				type: String,
				default: 'default'
			},
			size: String,
			disabled: Boolean,
			plain: Boolean,
			htmlType: {
				default : 'button',
				validator(value){
					return insideOf(value, ['button', 'submit', 'reset']);
				}
			}
		},
		data(){
			return {
				prefixClass
			}
		}
	}
</script>