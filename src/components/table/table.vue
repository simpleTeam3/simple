<template>
    <div :class="wrapClass">
        <div :class="getClass">
            <vut-table-head
            :columns="columns"
            :prefixClass="prefixClass"
            v-if="showHeader"
            ></vut-table-head>

                <vut-table-body
                v-show="data.length>0"
                :columns="columns"
                :data="data"
                :prefixClass="prefixClass"
                >
                </vut-table-body>
            <div :class="prefixClass + '-tip' " v-show="(!data || data.length < 1)">
                <table>
                    <tbody>
                        <tr>
                            <td><span>{{emptyDataText}}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
      },
      border: {
          type: Boolean,
          default: false
      },
      stripe: {
          type: Boolean,
          default: false
      },
      showHeader: {
          type: Boolean,
          default: true
      },
      emptyDataText: {
          type: String,
          default: '暂无数据'
      }
  },
  data () {
      return {
         prefixClass
      }
  },
  computed: {
    wrapClass() {
        return [
            `${this.prefixClass}-wrap`
        ];
    },
    getClass() {
        return [
            this.prefixClass,
            {
                [`${this.prefixClass}-${this.size}`]: this.size!== 'default' && !!this.size,
                [`${this.prefixClass}-border`]: this.border,
                [`${this.prefixClass}-stripe`]: this.stripe
            }
        ];
    }
  }
}
</script>
