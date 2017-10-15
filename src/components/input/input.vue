<template>
    <div :class="wrapClass">
    	<template v-if="type!=='textarea'">
			<input
			:type="type"
			:class="getClass"
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
			:maxlength="maxlength"
			@keyup.enter="handleEnterFn"
			@focus="handleFocusFn"
			@blur="handleBlurFn"
			>
		</template>
		<textarea
		v-else
		:class="getClass"
		:placeholder="placeholder"
		:disabled="disabled"
		:rows="rows"
		></textarea>
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
			},
			placeholder: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			},
			maxlength: {
				type: Number
			},
			rows: {
				type: Number,
				default: 3
			},
			hideborder: {
				type: Boolean,
				default: false
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
						[`${prefixClass}-${this.size}`]: !!this.size,
						[`${prefixClass}-hide-border`]: this.hideborder 
					}
				];
			}
		},
		watch: {
			
		},
		methods: {
			handleEnterFn(event) {
				this.$emit('on-enter', event);
			},
			handleFocusFn(event) {
				this.$emit('on-focus', event);
			},
			handleBlurFn(event) {
				this.$emit('on-blur', event);
			}
		}
	}
</script>