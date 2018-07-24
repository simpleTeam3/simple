/*
 * @Author: Sauce 
 * @Date: 2018-06-09 09:51:25 
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-07-24 21:19:37
 */

<template>
	<transition :name='prefixClass + "-fade"'>
		<div :class='[prefixClass + "-mask",{"is-fullscreen":fullscreen}]'>
			<div v-show="visible" :class='prefixClass + "-box"'>
				<svg :class='prefixClass + "-circular"' viewBox="0 0 50 50">
					<circle :class='prefixClass + "-outline"' cx="25" cy="25" r="20" fill="none"></circle>
				</svg>
			</div>
		</div>
	</transition>
</template>
<script>
	const prefixClass = "vut-loading"
	export default{
		name : 'vut-loading',
		props : {
			visible:{
				type : Boolean,
				default : false
			},
			fullscreen:{
				type : Boolean,
				default : false
			}
		},
		data(){
			return {
				prefixClass
			}
		}
	}
</script>