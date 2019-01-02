<template>
    <div 
        :class="itemClass"
        :style="itemStyle"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutCarouselItem',
    data(){
        return {
            prefix: this.global.prefix + 'carousel-item',
            translateX: 0,                                  //相对偏移
            active: false,                                  //是否当前
            animating: false,                               //是否在动画中
        }
    },
    computed: {
        itemClass(){
            return [
                this.prefix,
                {
                    'is-active': this.active,
                    'is-animating': this.animating
                }
            ]
        },
        itemStyle(){
            return {
                msTransform: `translateX(${this.translateX}px)`,
                webkitTransform: `translateX(${this.translateX}px)`,
                transform: `translateX(${this.translateX})px`
            }
        }
    },
    methods: {
        initPosition(index, activeIndex, oldIndex){
            const parentWidth = this.$parent.$el.offsetWidth;
            this.translateX = parentWidth * (index - activeIndex);
        },
        //修改相对位置，父组件调用,(当前子组件的index, 当前展示index, 上个展示index)
        translateItem(index, activeIndex, oldIndex){
            const parentWidth = this.$parent.$el.offsetWidth;
            const length = this.$parent.items.length
            if(this.translateX/parentWidth == -2){
                this.translateX = (length - 3) * parentWidth;
            }else{
                this.translateX = this.translateX - parentWidth;
            }
            this.animating = index === activeIndex || index === oldIndex;
            this.active = index === activeIndex;
        }
    }
}
</script>
