<template>
    <div :class="prefix">
        <div :class="prefix + '-wrap'">
            <div :class="prefix + '-bar'" :style="barStyle"></div>
        </div>
        <div :class="prefix + '-label'">{{percent}}%</div>
    </div>
</template>

<script>
export default {
    name: 'vutProgress',
    props: {
        value: String
    },
    data(){
        return {
            prefix: this.global.prefix + 'progress'
        }
    },
    computed: {
        percent(){
            return this.value <= 100 ? Math.floor(this.value) : 100
        },
        barStyle(){
            let style={
                width: this.precent + "%"
            }
            return style;
        }
    }
}
</script>

<style>

</style>
