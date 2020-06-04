<template>
    <li :class="prefix" @click="selectSelf" v-show="visible">
        <slot>
            <span>{{label}}</span>
        </slot>
    </li>
</template>
<script>
import Emit from '../../mixins/emit'
export default {
    mixins: [Emit],
    name: 'vutOption',
    props: {
        label: [String, Number],
        value: [String, Number]
    },
    data(){
        return {
            prefix: this.global.prefix + 'select-dropdown-item',
            visible: true,
        }
    },
    methods: {
        selectSelf(){
            let payload = {
                label: this.label,
                value: this.value
            }
            this.dispatch('vutSelect', 'select', payload)
        }
    }
}
</script>

