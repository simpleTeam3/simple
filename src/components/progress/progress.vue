<template>
    <div :class="prefix">
        <div :class="prefix + '-wrap'">
            <div :class="prefix + '-bar'" :style="barStyle"></div>
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
        value: Number
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
