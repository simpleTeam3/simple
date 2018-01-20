<template>
  <div :class="wrapClass">
    <span :class="upClass" @click="handleUpFn" v-if="!hideControls">
      <vut-icon :type="upIcon"></vut-icon>
    </span>
    <span :class="downClass" @click="handleDownFn" v-if="!hideControls">
      <vut-icon :type="downIcon"></vut-icon>
    </span>
    <div :class="innerClass">
      <input
      :class="inputClass"
      :value="precisionValue"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInputFn"
      @change="handleChangeFn"
      @blur="handleBlurFn"
      @focus="handleFocusFn"
      >
    </div>
  </div>
</template>

<script>
const prefixClass = "vut-input-number";
export default {
  name: "vut-input-number",
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    hideControls: {
        type: Boolean,
        default: false
    },
    debounce: {
        type: Number,
        default: 300
    },
    size: String,
    precision: Number,
    controlsPosition: String
  },
  data() {
    return {
      upDisabled: false,
      downDisabled: false,
      currentValue: this.value,
      focused: false,
      debounceTimeout: null
    }
  },
  computed: {
    wrapClass() {
      return [
        `${prefixClass}-wrap`,
        {
          [`${prefixClass}-wrap-${this.size}`]: !!this.size,
          [`${prefixClass}-focused`]: this.focused,
          [`${prefixClass}-disabled`]: this.disabled,
          [`${prefixClass}-readonly`]: this.readonly,
          [`${prefixClass}-hide-controls`]: this.hideControls,
          [`${prefixClass}-edge-controls`]: this.controlsPosition == "edge"
        }
      ];
    },
    innerClass() {
      return [
        `${prefixClass}-inner-wrap`
      ]
    },
    upClass() {
      return [
        `${prefixClass}-action`,
        `${prefixClass}-up`,
        {
          [`${prefixClass}-handler-disabled`]: this.upDisabled
        }
      ]
    },
    downClass() {
      return [
        `${prefixClass}-action`,
        `${prefixClass}-down`,
        {
          [`${prefixClass}-handler-disabled`]: this.downDisabled
        }
      ]
    },
    inputClass() {
      return [
        `${prefixClass}-inner`
      ]
  },
  precisionValue: {
      get() {
          return !isNaN(this.precision) ? this.currentValue.toFixed(this.precision) : this.currentValue;
      }
  },
  upIcon() {
      if(this.controlsPosition == "edge") {
          return "add";
      }
      return "top-arrow";
  },
  downIcon() {
      if(this.controlsPosition == "edge") {
          return "move";
      }
      return "bottom-arrow";
  }
  },
  mounted() {
    this.changeState();
  },
  methods: {
    handleUpFn() {
        if(this.upDisabled) return;
        const value = this.calculateStep(this.currentValue, this.step, "up");
        this.setCurrentValue(value, "input");
    },
    handleDownFn(event) {
        if(this.downDisabled) return;
        const value = this.calculateStep(this.currentValue, this.step, "down");
        this.setCurrentValue(value, "input");
    },
    handleInputFn(event) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
            let value = event.target.value.trim();
            if(value.match(/^\-?\.?$|\.$/)) return;
            if(!isNaN(this.precision)) {
                value = this.toPrecision(value, this.precision);
            }
            value = Number(value);
            if(!isNaN(value)) {
                this.setCurrentValue(value, "input");
            }else {
                this.setCurrentValue(this.currentValue, "input");
            }
            this.currentValue = value;
        }, this.debounce) 
    },
    handleChangeFn(event) {
        let value = event.target.value.trim();
        if(value.match(/^\-?\.?$|\.$/)) return;
        if(!isNaN(this.precision)) {
            value = this.toPrecision(value, this.precision);
        }
        value = Number(value);
        if(!isNaN(value)) {
            this.setCurrentValue(value, "change");
        }else {
            this.setCurrentValue(this.currentValue, "change");
        }
        this.currentValue = value;
    },
    handleBlurFn() {
        this.focused = false;
        this.setCurrentValue(this.currentValue, "on-blur");
    },
    handleFocusFn() {
        this.focused = true;
        this.setCurrentValue(this.currentValue, "on-focus");
    },
    toPrecision(data, currentPrecision) {
        if (currentPrecision === undefined) currentPrecision = 0;
        return parseFloat(parseFloat(Number(data).toFixed(currentPrecision)));
    },
    getDecimalLen(val) {
        return val.toString().split(".")[1] ? val.toString().split(".")[1].length : 0;
    },
    calculateStep(val, step, operation) {
        let expandPrecision = null;
        let currentPrecision = null;
        if(isNaN(this.precision)) {
            const decimalVal = this.getDecimalLen(val);
            const decimalStep = this.getDecimalLen(step);
            const maxPrecision = Math.max(decimalVal, decimalStep);
            expandPrecision = Math.pow(10, maxPrecision);
            currentPrecision = maxPrecision;
        }else {
            expandPrecision = Math.pow(10, this.precision);
            currentPrecision = this.precision;
        }
        if(operation == "up") {
            return this.toPrecision((val * expandPrecision + step * expandPrecision) / expandPrecision, currentPrecision);
        }else if(operation == "down") {
            return this.toPrecision((val * expandPrecision - step * expandPrecision) / expandPrecision, currentPrecision);
        }
    },
    setCurrentValue(value, events) {
        if(this.readonly) return;
        if(value > this.max) {
            value = this.max;
        }
        if(value < this.min) {
            value = this.min;
        }
        this.$nextTick(() => {
            this.currentValue = value;
            if(events === "input" || events === "on-change") {
                this.$emit(events, value);
            }else {
                this.$emit(events);
            }
        })
    },
    changeState() {
      if(this.min >= this.max) {
          this.upDisabled = this.downDisabled = true;
          return;
      }
      let value = Number(this.currentValue);
      if(!isNaN(value)) {
        this.upDisabled = this.calculateStep(value, this.step, "up") > this.max;
        this.downDisabled = this.calculateStep(value, this.step, "down") < this.min;
      }else{
        this.upDisabled = this.downDisabled = true;
      }
    }
  },
  watch: {
    value: {
        immediate: true,
        handler(val) {
            let newVal = Number(val);
            if (isNaN(newVal)) return;
            if(newVal > this.max) {
                newVal = this.max;
            }
            if(newVal < this.min) {
                newVal = this.min;
            }
            this.currentValue = newVal;
            this.$nextTick(() => {
                this.$emit("input", newVal);
            })
        }
    },
    currentValue(val) {
      this.changeState();
    },
    max(val) {
      this.changeState();
    },
    min(val) {
      this.changeState();
    }
  }
}
</script>
