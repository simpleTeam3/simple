<template>
    <div :class="wrapClass">
        <!--<table>
            <thead>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
            </thead>
        </table>-->
        <vut-table-head
        :columns="columns"
        :prefixClass="prefixClass"
        ></vut-table-head>

        <vut-table-body
        :columns="columns"
        :data="data"
        :prefixClass="prefixClass"
        >
        </vut-table-body>
    </div>
</template>
<script>
import tableHead from './tableHead.vue';
import tableBody from './tableBody.vue';

const prefixClass = "vut-table";
export default {
  name: 'vut-table',
  components: {
      'vut-table-head': tableHead,
      'vut-table-body': tableBody
  },
  props: {
      data: {
          type: Array,
          default: []
      },
      columns: {
          type: Array,
          default: []
      },
      size: {
          type: String,
          default: 'default'
      }
  },
  data () {
      return {
         prefixClass: prefixClass
      }
  },
  computed: {
    wrapClass() {
        return [
            `${this.prefixClass}-wrap`,
            {
                [`${this.prefixClass}-${this.size}`]: this.size!== 'default' && !!this.size
            }
        ];
    }
  }
}
</script>
