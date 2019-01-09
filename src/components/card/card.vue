<template>
    <div :class="cardClass" :style="cardStyle">
        <div :class="prefix + '-header'" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <img
            v-if="cover"
            :src="cover"
        />
        <div :class="prefix + '-content'">
            <div :class="prefix + '-meta-title'" v-if="imgTitle">{{imgTitle}}</div>
            <div :class="prefix + '-meta-description'" v-if="imgDescription">{{imgDescription}}</div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vutCard',
    props: {
        cardStyle: {},
        bodyStyle: {},
        hoverabled: Boolean,
        cover: String,
        imgTitle: String,
        imgDescription: String
    },
    data(){
        return {
            prefix: this.global.prefix + 'card'
        }
    },
    computed: {
        cardClass(){
            return [
                this.prefix,
                {
                    'hover-shadow': this.hoverabled
                }
            ]
        }
    },
}
</script>