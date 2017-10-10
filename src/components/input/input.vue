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
			},
			size: {
				type: String,
				default: 'default'
			}
		},
		data () {
			return {
				prefixClass
			}
		},
		computed: {
			wrapClass() {
				return [
					`${prefixClass}-wrap`
				];
			},
			getClass() {
				return [
					prefixClass,
					{
						[`${prefixClass}-${this.size}`]: !!this.size
					}
				];
			}
		},
		watch: {
			
		}
	}
</script>