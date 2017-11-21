<template>
  <span :class="wrapClass" @click="handleToggleFn" ref="core">
    <input type="hidden" :value="currentValue">
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
    offColor: String
  },
  data () {
    return {
      currentValue: this.value
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
    }
  },
  watch: {
    currentValue() {
      this.setBackgroundColor();
    }
  },
  mounted() {
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
