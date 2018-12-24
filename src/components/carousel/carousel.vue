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
            prefix: this.global.prefix + 'carousel',
            items: [],
            activeIndex: -1,
        }
    },
    computed: {
        itemLength(){
            return this.$children.length;
        },
        itemWidth(){
            return parseInt(getOneStyle(this.$children[0], 'width'))
        }
    },
    mounted(){
        this.updateItems();
    },
    watch: {
        activeIndex(newVal, oldVal){
            this.resetItemPosition(oldVal);
        }
    },
    methods: {
        //获取子类目标
        updateItems(){
            this.items = this.$children.filter(item => item.$options.name == "vutCarouselItem");
        },
        //更新item位置
        resetItemPosition(oldIndex){

        },
    }
}
</script>
