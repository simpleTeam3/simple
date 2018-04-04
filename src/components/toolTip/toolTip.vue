<template>
    <div :class="wrapClass" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        <div :class="prefixClass+'-rel'" ref="effect">
            <slot></slot>
        </div>
        <transition :name="prefixClass+'-fade'">
            <div :class="prefixClass+'-popper'" :style="popperStyle" v-show="visible" ref="popper">
                <div :class="prefixClass+'-content'">
                    <div :class="prefixClass+'-arrow'"></div>
                    <div :class="prefixClass+'-inner'" v-text="content"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {getOneStyle} from "../../utils/tools.js";

    const prefixClass = "vut-tooltip";
    export default {
        name: "vut-tooltip",
        props: {
            content: [String, Number],
            placement: {
                type: String,
                default: 'bottom'
            }
        },
        data() {
            return {
                prefixClass,
                visible: false,
                popperStyle: {}
            }
        },
        computed: {
            wrapClass() {
                return [
                    `${this.prefixClass}-wrap`,
                    {
                        [`${this.prefixClass}-placement-${this.placement}`]: this.placement
                    }
                ];
            }
        },
        methods: {
            handleMouseOver() {
                this.visible = true;
                this.getPopperStyle();
            },
            handleMouseOut() {
                this.visible = false;
            },
            getPopperStyle() {
                this.$nextTick(() => {
                    const height = getOneStyle(this.$refs.effect, 'height');
                    const width = getOneStyle(this.$refs.effect, 'width');
                    const popperWidth = getOneStyle(this.$refs.popper, 'width');
                    this.popperStyle.top = `${parseInt(height)+8}px`;
                    this.popperStyle.left = `${(parseInt(width) - parseInt(popperWidth)) / 2}px`;
                })
            }
        }
    }
</script>
