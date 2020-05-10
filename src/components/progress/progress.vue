<template>
    <div :class="[prefix, prefix + '-type-' + type]">
        <div :class="prefix + '-bar-wrap'" v-if="type === 'line'">
            <div :class="prefix + '-bar'" :style="barStyle"></div>
        </div>
        <div :class="prefix + '-circle'" :style="circleStyle" v-else>
            <svg viewBox="0 0 100 100">
                <path
                    class="el-progress-circle__track"
                    :d="trackPath"
                    stroke="#e5e9f2"
                    :stroke-width="relativeStrokeWidth"
                    fill="none"
                    :style="trailPathStyle"></path>
            </svg>
        </div>
        <div :class="labelClass">
            <span v-if="percent < 100">{{percent}}%</span>
            <i v-else class="vut-icon-roundcheckfill"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vutProgress',
    props: {
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
            default: 130
        },
        relativeStrokeWidth: {
            type: Number,
            default: 5
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
                {"is-success": this.percent >= 100}
            ]
        },
        barStyle(){
            let style={
                width: this.percent + "%",
                backgroundColor: this.percent >= 100 ? "#19be6b" : ""
            }
            return style;
        },
        circleStyle() {
            return {width: this.width + 'px', height: this.width + 'px'}
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
    }
}
</script>

<style>

</style>
