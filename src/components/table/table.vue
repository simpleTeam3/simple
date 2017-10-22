<template>
    <div :class="wrapClass">
        <div :class="getClass">
            <vut-table-head
            :columns="columns"
            :prefixClass="prefixClass"
            v-if="showHeader"
            ></vut-table-head>

            <vut-table-body
            :columns="columns"
            :data="data"
            :prefixClass="prefixClass"
            >
            </vut-table-body>
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
