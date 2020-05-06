<template>
    <div :class="prefix">
        <div :class="prefix + '-bar-wrap'" v-if="type === 'line'">
            <div :class="prefix + '-bar'" :style="barStyle"></div>
        </div>
        <div :class="prefix + '-circle'" v-else></div>
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
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: 'line'
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
        percent(){
            return this.value <= 100 ? Math.floor(this.value) : 100;
        },
    }
}
</script>

<style>

</style>
