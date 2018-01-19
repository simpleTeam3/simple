<template>
    <div :class="prefixClass + '-body'">
        <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
                <col v-for="(column, index) in columns" :width="getCellWidth(column, index)">
            </colgroup>
            <tbody>
                <tr v-for="item in data">
                    <td v-for="(column, index) in columns" :class="alignClass(column)">
                        <div :class="prefixClass + '-cell'">
                            <template v-if="column.render">
                                <Cell :render="column.render" :index="index" :row="item" :column="column"></Cell>
                            </template>
                            <template v-else>
                                <span>{{item[column.prop]}}</span>
                            </template>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Mixins from './mixins';
import Cell from './render';

export default {
  name: "vut-table-body",
  mixins: [Mixins],
  components: {
      Cell
  },
  props: {
      data: Array,
      columns: Array,
      prefixClass: String
  },
  data () {
      return {
          
      }
  },
  computed: {
  },
  mounted () {
      this.expandRender();
  },
  methods: {
      expandRender() {
      }
  }
}
</script>
