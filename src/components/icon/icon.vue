<template>
    <i :class="iconClass" :style="getStyles"></i>
</template>

<script>
const prefixClass = "vut-icon";
export default {
  name: "vut-icon",
  props: {
      type: String,
      size: [Number, String],
      color: String
  },
  computed: {
      iconClass() {
          return `${prefixClass} ${prefixClass}-${this.type}`;
      },
      getStyles() {
          let styles = {};

          if(this.size) {
              if(this.size) {
                  styles['font-size'] = `${this.size}px`;
              }
          }

          if(this.color) {
              styles.color = this.color;
          }

          return styles;
      }
  }
}
</script>
