/*
 * @Author: Sauce 
 * @Date: 2018-06-09 09:51:25 
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-07-14 16:35:22
 */

<template>
	<transition :name='prefixClass + "-fade"'>
		<svg :class='prefixClass + "-circular"' viewBox="0 0 50 50">
			<circle :class='prefixClass + "-outline"' cx="25" cy="25" r="20" fill="none"></circle>
		</svg>
	</transition>
</template>
<script>
	const prefixClass = "vut-loading"
	export default{
		name : 'vut-loading',
		data(){
			return {
				prefixClass
			}
		}
	}
</script>