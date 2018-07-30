/*
 * @Author: Sauce 
 * @Date: 2018-06-09 09:51:25 
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-07-30 21:13:12
 */

<template>
	<transition :name='prefixClass + "-fade"' @after-leave="handleAfterLeave">
		<div :class='[prefixClass + "-mask",{"is-fullscreen":loadingFull}]' v-show="visible">
			<div  :class='prefixClass + "-box"'>
				<svg :class='prefixClass + "-circular"' viewBox="0 0 50 50">
					<circle :class='prefixClass + "-outline"' cx="25" cy="25" r="20" fill="none"></circle>
				</svg>
				<p :class='prefixClass + "-text"'>{{loadingText}}</p>
			</div>
		</div>
	</transition>
</template>
<script>
	const prefixClass = "vut-loading"
	export default {
		name: 'vut-loading',
		props: {
			visible:{
				type : Boolean,
				default : false
			},
			full:{
				type : Boolean,
				default : false
			},
			text:{
				type : String,
				default : ""
			}
		},
		data(){
			return {
				attrText:"",
				fullscreen:false,
				prefixClass
			}
		},
		methods: {
			handleAfterLeave(){
				this.$emit('after-leave');
			}
		},
		computed: {
			loadingText(){
				return this.text || this.attrText;
			},
			loadingFull(){
				return this.full || this.fullscreen;
			}
		}
	}
</script>