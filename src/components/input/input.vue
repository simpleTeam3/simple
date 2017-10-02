<template>
    <div>
    	<input
		:type="type"
		>
    </div>
</template>

<script>
    const prefixClass = "vut-input";
	export default {
		name: 'Input',
		props: {
			type: {
				type: String,
				default: 'text'
			}
		},
		data () {
			return {
				prefixClass
			}
		}
	}
</script>