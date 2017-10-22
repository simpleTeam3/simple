<template>
    <div :class="prefixClass + '-header'">
        <table cellspacing="0" cellpadding="0" border="0">
            <colgroup>
                <col v-for="(column, index) in columns" :width="getCellWidth(column, index)">
            </colgroup>
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :class="column.className">
                        <div :class="prefixClass + '-cell'">
                            <span v-html="column.label"></span>
                        </div>
                    </th>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script>
export default {
  name: 'vut-table-head',
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
      getCellWidth(column, index) {
          let width = "";
          if(column.width){
              width = column.width;
          }else{
              //
          }
          return width;
      }
  }
}
</script>
