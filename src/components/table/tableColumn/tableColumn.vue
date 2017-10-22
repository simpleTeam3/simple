<template>
    <div :class="wrapClass">
    </div>
</template>
<script>
const prefixClass = "vut-table-column";
export default {
  name: 'vut-table-column',
  props: {
      prop: String,
      label: String
  },
  data () {
      return {
          
      }
  },
  watch: {
    prop() {
        this.$emit('prop', this.prop, this.label);
    }  
  },
  computed: {
    wrapClass() {
        return [
            `${prefixClass}-wrap`
        ];
    }
  }
}
</script>
