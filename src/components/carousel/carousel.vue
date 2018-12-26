<template>
    <div :class="prefix">
        <div :class="prefix + '-main'">
            <slot></slot>
        </div>
        <button
            :class="prefix+'-button-next'"
            @click="next"
        >下一个</button>
    </div>
</template>

<script>
import { getOneStyle } from '../../utils/tools.js'

export default {
    name: 'vutCarousel',
    props: {
        interval: {
            type: Number,
            default: 2000
        },
        loop: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'carousel',
            items: [],
            activeIndex: 0,
            timer: null                                     //定时器句柄
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
        // this.startTimer();
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
            this.items.forEach((item, index) => {
                item.initPosition(index, this.activeIndex)
            })
        },
        //更新item位置
        resetItemPosition(oldIndex){
             this.items.forEach((item, index) => {
                item.translateItem(index, this.activeIndex, oldIndex);
             })
        },
        //开始自动轮播
        startTimer(){
            this.timer = setInterval(this.activeIndexAdd, this.interval);
        },
        activeIndexAdd(){
            if(this.activeIndex < this.items.length - 1){
                this.activeIndex++;
            }else if(this.loop){
                this.activeIndex = 0;
            }
        },
        next(){
            this.activeIndexAdd();
        }
    }
}
</script>
