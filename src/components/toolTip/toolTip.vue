<template>
    <div :class="wrapClass" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        <div :class="prefixClass+'-rel'" ref="effect">
            <slot></slot>
        </div>
        <div :class="prefixClass+'-popper'" :style="getPopperStyle">
            <div :class="prefixClass+'-content'">
                <div :class="prefixClass+'-arrow'"></div>
                <div :class="prefixClass+'-inner'" v-text="content"></div>
            </div>
        </div>
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
                prefixClass
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
            },
            getPopperStyle() {
                let styles = {};
                const height = getOneStyle(this.$refs.effect, 'height');
                styles.top = `${height}px`;
                return styles;
            }
        },
        methods: {
            handleMouseOver() {
                console.log("鼠标移上来了");
            },
            handleMouseOut() {
                console.log("鼠标移出去了");
            }
        }        
    }
</script>
