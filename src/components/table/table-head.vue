<template>
    <div :class="wrapClass">
        <table>
            <thead>
                <th v-for="(item,index) in columns">
                    <span>{{item.name}}</span>
                </th>
            </thead>
        </table>
    </div>
</template>
<script>
const prefixClass = "vut-table-head";
export default {
  name: 'vut-table-head',
  props: {
      columns: {
          type: Array,
          default: []
      }
  },
  data () {
      return {

      }
  },
  mounted () {
      //console.table(this.columns);
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
