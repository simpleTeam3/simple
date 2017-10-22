<template>
    <div :class="prefixClass + '-body'">
        <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
                <col v-for="(column, index) in columns">
            </colgroup>
            <tbody>
                <tr v-for="item in data">
                    <td v-for="(column, index) in columns">
                        <div :class="prefixClass + '-cell'">
                            <span>{{item[column.prop]}}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: "vut-table-body",
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
