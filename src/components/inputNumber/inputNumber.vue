<template>
  <div :class="wrapClass">
    <div :class="handlerClass">
      <span :class="upClass" @click="handleUpFn">+</span>
      <span :class="downClass">-</span>
    </div>
    <div :class="innerClass">
      <input
      :class="getClass"
      :value="value"
      >
    </div>
  </div>
</template>

<script>
const prefixClass = "vut-input-number";
export default {
  name: "vut-input-number",
  props: {
    value: Number
  },
  data() {
    return {
      prefixClass,
      currentValue: this.value
    }
  },
  computed: {
    wrapClass() {
      return [
        `${prefixClass}-wrap`
      ];
    },
    handlerClass() {
      return [
        `${prefixClass}-handler-wrap`
      ]
    },
    innerClass() {
      return [
        `${prefixClass}-inner-wrap`
      ]
    },
    upClass() {
      return `${prefixClass}-up`
    },
    downClass() {
      return `${prefixClass}-down`
    },
    getClass() {
      return [
        `${prefixClass}-inner`
      ]
    }
  },
  methods: {
    handleUpFn() {
      this.currentValue += 1;
      this.$nextTick(() => {
        this.$emit('input', this.currentValue);
      })
    }
  }
}
</script>
