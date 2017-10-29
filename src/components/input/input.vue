<template>
    <div :class="wrapClass">
    	<template v-if="type!=='textarea'">
			<div :class="prefixClass + '-group-prepend' " v-if="prepend">
				<slot name="prepend"></slot>
			</div>
			<input
			:type="type"
			:class="getClass"
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
			:maxlength="maxlength"
			:value="value"
			:style="inputStyle"
			@keyup.enter="handleEnterFn"
			@focus="handleFocusFn"
			@blur="handleBlurFn"
			@input="handleInputFn"
			>
			<div :class="prefixClass + '-group-append' " v-if="append">
				<slot name="append"></slot>
			</div>
		</template>
		<textarea
		v-else
		:class="getClass"
		:placeholder="placeholder"
		:disabled="disabled"
		:readonly="readonly"
		:maxlength="maxlength"
		:value="value"
		:style="inputStyle"
		:rows="rows"
		@keyup.enter="handleEnterFn"
		@focus="handleFocusFn"
		@blur="handleBlurFn"
		@input="handleInputFn"
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
				type: String
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
				default: 2
			},
			hideBorder: {
				type: Boolean,
				default: false
			},
			value: String,
			inputStyle: String
		},
		data () {
			return {
				prefixClass,
				prepend: true,
				append: true
			}
		},
		computed: {
			wrapClass() {
				return [
					`${prefixClass}-wrap`,
					{
						[`${prefixClass}-wrap-${this.size}`]: (!!this.size && this.size !== 'default'),
						[`${prefixClass}-group`]: this.prepend || this.append,
						[`${prefixClass}-prepend`]: this.prepend,
						[`${prefixClass}-append`]: this.append

					}
				];
			},
			getClass() {
				return [
					prefixClass,
					{
						[`${prefixClass}-${this.size}`]: !!this.size,
						[`${prefixClass}-hide-border`]: this.hideBorder 
					}
				];
			}
		},
		mounted() {
			if(this.type !== 'textarea'){
				this.prepend = !!this.$slots.prepend;
				this.append = !!this.$slots.append;
			}else{
				this.prepend = false;
				this.append = false;
			}
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
			},
			handleInputFn(event) {
				let value = event.target.value;
				this.$emit('input', value);
				this.$emit('on-change', event);
			}
		}
	}
</script>