<template>
    <div :class="wrapClass">
    	<template v-if="type!=='textarea'">
			<!-- 前置块 -->
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
			<!-- 前置内容 -->
			<!-- 后置内容 -->
			<span
				:class="prefixClass + '-suffix'"
				v-if="$slots.suffix || suffixIcon"
			>
				<span :class="prefixClass + '-suffix-inner'">
					<slot name="suffix"></slot>
					<vut-icon :type="suffixIcon" :class="prefixClass + '-icon'"></vut-icon>
				</span>
			</span>
			<!-- 后置块 -->
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
import emit from '../../mixins/emit';
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
			inputStyle: String,
			suffixIcon: String
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
						[`${prefixClass}-append`]: this.append,
					}
				];
			},
			getClass() {
				return [
					prefixClass,
					{
						[`${prefixClass}-${this.size}`]: !!this.size,
						[`${prefixClass}-hide-border`]: this.hideBorder,
						[`${prefixClass}-is-suffix`]: this.suffixIcon
					}
				];
			}
		},
		mixins: [emit],
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
				this.dispatch('vutFormItem', 'on-blur-item', event);
			},
			handleInputFn(event) {
				let value = event.target.value;
				this.$emit('input', value);
				this.$emit('on-change', event);
				// 触发formItem里的监听
				this.dispatch('vutFormItem','on-change-item', value)
			}
		}
	}
</script>
