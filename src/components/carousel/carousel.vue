<template>
    <div :class="prefix">
        <div :class="prefix + '-main'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { getOneStyle } from '../../utils/tools.js'

export default {
    name: 'vutCarousel',
    data(){
        return {
            prefix: this.global.prefix + 'carousel'
        }
    },
    computed: {
        itemLength(){
            return this.$children.length;
        },
        itemWidth(){
            return parseInt(getOneStyle(this.$children[0], 'width'))
        }
    }
}
</script>
