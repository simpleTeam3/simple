<template>
    <div :class="wrapClass">
        <table>
            <thead>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
            </thead>
        </table>
        <vut-table-head
        :columns="data"
        ></vut-table-head>
    </div>
</template>
<script>
import tableHead from './table-head.vue';

const prefixClass = "vut-table";
export default {
  name: 'vut-table',
  components: {
      'vut-table-head': tableHead
  },
  props: {
      data: {
          type: Array
      }
  },
  data () {
      return {
          
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
