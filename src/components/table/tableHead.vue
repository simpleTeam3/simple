<template>
    <div :class="prefixClass + '-header'">
        <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
                <col v-for="(column, index) in columns" :width="getCellWidth(column, index)">
            </colgroup>
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :class="alignClass(column)">
                        <div :class="prefixClass + '-cell'">
                            <span v-html="column.label || '#' "></span>
                        </div>
                    </th>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script>
import Mixins from './mixins';

export default {
  name: 'vut-table-head',
  mixins: [Mixins],
  props: {
      columns: Array,
      prefixClass: String
  },
  data () {
      return {

      }
  },
  mounted () {
      //console.log("aa"+this.prefixClass);
  },
  computed: {
  },
  methods: {
      
  }
}
</script>
