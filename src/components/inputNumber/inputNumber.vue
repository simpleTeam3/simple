<template>
  <div :class="wrapClass">
    <div :class="handlerClass">
      <span :class="upClass" @click="handleUpFn">
        <vut-icon type="top-arrow"></vut-icon>
      </span>
      <span :class="downClass" @click="handleDownFn">
        <vut-icon type="bottom-arrow"></vut-icon>
      </span>
    </div>
    <div :class="innerClass">
      <input
      :class="inputClass"
      :value="precisionValue"
      @input="handleInputFn"
      @change="handleChangeFn"
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
      default: 1
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
    size: String,
    precision: Number
  },

  data() {
    return {
      upDisabled: false,
      downDisabled: false,
      currentValue: this.value
    }
  },

  computed: {
    wrapClass() {
      return [
        `${prefixClass}-wrap`,
        {
          [`${prefixClass}-wrap-${this.size}`]: !!this.size
        }
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
      return [
        `${prefixClass}-action`,
        `${prefixClass}-up`,
        {
          [`${prefixClass}-disabled`]: this.upDisabled
        }
      ]
    },
    downClass() {
      return [
        `${prefixClass}-action`,
        `${prefixClass}-down`,
        {
          [`${prefixClass}-disabled`]: this.downDisabled
        }
      ]
    },
    inputClass() {
      return [
        `${prefixClass}-inner`
      ]
  },
  precisionValue() {
      if(!isNaN(this.precision)) {
          return this.currentValue.toFixed(this.precision);
      }
      return this.currentValue;
  }
  },

  mounted() {
    this.changeState();
  },

  methods: {
    handleUpFn() {
        if(this.upDisabled) return;
        const value = this.calculateStep(this.currentValue, this.step, "up");
        this.setCurrentValue(value);
    },
    handleDownFn(event) {
        if(this.downDisabled) return;
        const value = this.calculateStep(this.currentValue, this.step, "down");
        this.setCurrentValue(value);
    },
    handleInputFn(event) {
        let value = event.target.value.trim();
        if(value.match(/^\-?\.?$|\.$/)) return;
        this.currentValue = Number(value);
        if(!isNaN(this.precision)) {
            value = this.toPrecision(value, this.precision);
        }
        if(!isNaN(value)) {
            this.setCurrentValue(value);
        }else {
            this.setCurrentValue(this.currentValue);
        }
    },
    handleChangeFn(event) {
        console.log(1);
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
    setCurrentValue(value) {
        if(value > this.max) {
            value = this.max;
        }
        if(value < this.min) {
            value = this.min;
        }
        this.$nextTick(() => {
            this.currentValue = value;
            this.$emit("input", value);
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
