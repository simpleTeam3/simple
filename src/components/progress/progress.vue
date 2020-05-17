<template>
    <div :class="[prefix, prefix + '-type-' + type]">
        <div :class="prefix + '-bar-wrap'" :style="wrapStyle" v-if="type === 'line'">
            <div :class="prefix + '-bar'" :style="barStyle">
                <div :class="prefix + '-inner-text'" v-if="textInside">{{percent}}%</div>
            </div>
        </div>
        <div :class="prefix + '-circle'" :style="circleStyle" v-else>
            <svg viewBox="0 0 100 100">
                <path
                    :class="prefix + '-circle__track'"
                    :d="trackPath"
                    stroke="#e5e9f2"
                    :stroke-width="relativeStrokeWidth"
                    fill="none"
                    :style="trailPathStyle"></path>
                <path
                    :class="prefix + '-circle__path'"
                    :d="trackPath"
                    :stroke="strokeColor"
                    :stroke-width="relativeStrokeWidth"
                    stroke-linecap="round"
                    fill="none"
                    :style="percentPathStyle"></path>
            </svg>
        </div>
        <div :class="labelClass" v-if="!textInside">
            <span v-if="!status && percent < 100">{{percent}}%</span>
            <i v-else class="vut-icon-roundcheckfill"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vutProgress',
    props: {
        color: {
            type: String,
            default: ''
        },
        value: {
            type: [Number, String],
            default: 0
        },
        type: {
            type: String,
            default: 'line'
        },
        width: {
            type: Number,
            default: 150
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        textInside: {
            type: Boolean,
            default: false
        },
        status: {
            type: String,
            validator: val => ['success', 'fail', 'text'].indexOf(val) > -1
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'progress'
        }
    },
    computed: {
        labelClass(){
            return [
                this.prefix + '-label',
                {"is-success": this.percent >= 100},
                {"is-fail": this.status === 'fail'}
            ]
        },
        wrapStyle() {
            return { width: this.textInside ? '100%' : '88%'}
        },
        statusClass() {
            return this.status === 'fail' ? 'vut-icon-roundclosefill' : 'vut-icon-roundcheckfill'
        },
        barStyle(){
            let style={
                width: this.percent + "%",
                backgroundColor: this.percent >= 100 ? "#19be6b" : this.strokeColor,
                height: this.strokeWidth + 'px'
            }
            return style;
        },
        circleStyle() {
            return { width: this.width + 'px', height: this.width + 'px' }
        },
        strokeColor() {
            let color = "#2d8cf0";
            if (this.color) {
                color = this.color;
            } else if (this.status === 'fail') {
                color = "#ed3f14";
            } else if (this.percent >= 100) {
                color = "#19be6b";
            }
            
            return color;
        },
        // 相对线条宽度
        relativeStrokeWidth() {
            return (this.strokeWidth / this.width * 100).toFixed(1);
            // return this.strokeWidth
        },
        // 圆周长
        perimeter() {
            return 2 * Math.PI * this.radius;
        },
        // 类型
        rate() {
            return this.type === 'dashboard' ? 0.75 : 1;
        },
        percent(){
            return this.value <= 100 ? Math.floor(this.value) : 100;
        },
        radius() {
            if (this.type === 'circle' || this.type === 'dashboard') {
                return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
            } else {
                return 0;
            }
        },
        trackPath() {
            const radius = this.radius;
            const isDashboard = this.type === 'dashboard';
            return `
                M 50 50
                m 0 ${isDashboard ? '' : '-'}${radius}
                a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
                a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
            `;
        },
        trailPathStyle() {
            return {
                strokeDasharray: `${(this.perimeter * this.rate)}px, ${this.perimeter}px`,
                strokeDashoffset: this.strokeDashoffset
            };
        },
        percentPathStyle() {
            return {
                strokeDasharray: `${(this.percent / 100) * this.perimeter * this.rate}px, ${this.perimeter}px`,
                strokeDashoffset: this.strokeDashoffset
            }
        }
    }
}
</script>

<style>

</style>
