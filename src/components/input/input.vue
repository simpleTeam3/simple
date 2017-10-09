<template>
    <div :class="wrapClass">
    	<input
		:type="type"
		:class="getClass"
		>
    </div>
</template>

<script>
    const prefixClass = "vut-input";
	export default {
		name: 'vut-input',
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
		},
		computed: {
			wrapClass: function() {
				return [
					`${prefixClass}-wrap`
				];
			},
			getClass: function() {
				return [
					prefixClass
				];
			}
		}
	}
</script>