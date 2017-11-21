<template>
  <span :class="wrapClass" @click="handleToggleFn" ref="core">
    <input type="hidden" :value="currentValue">
    <span :class="innerClass" v-show="textActive">
        <slot name="on" v-if="currentValue"></slot>
        <slot name="off" v-else></slot>
    </span>
    <span :class="outClass">
      <template v-if="currentValue">{{ onText }}</template>
      <template v-else>{{ offText }}</template>
    </span>
  </span>
</template>

<script>
const prefixClass = "vut-switch";
export default {
  name: "vut-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    onColor: String,
    offColor: String,
    onText: String,
    offText: String
  },
  data () {
    return {
      currentValue: this.value,
      textActive: true
    }
  },
  computed: {
    wrapClass() {
      return [
        `${prefixClass}`,
        {
          [`${prefixClass}-checked`]: this.currentValue,
          [`${prefixClass}-disabled`]: this.disabled,
          [`${prefixClass}-${this.size}`]: this.size
        }
      ]
    },
    innerClass() {
      return `${prefixClass}-inner`
    },
    outClass() {
      return `${prefixClass}-out`
    }
  },
  watch: {
    currentValue() {
      this.setBackgroundColor();
    }
  },
  mounted() {
    this.textActive = this.size!=="small";
    this.setBackgroundColor();
  },
  methods: {
    handleToggleFn() {
      if(this.disabled){
        return false;
      }
      this.currentValue = this.currentValue ? false : true;
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    },
    setBackgroundColor() {
      let customColor = this.currentValue ? this.onColor : this.offColor;
      this.$refs.core.style.backgroundColor = customColor;
    }
  }
}
</script>
