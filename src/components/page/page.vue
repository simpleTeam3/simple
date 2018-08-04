<template>
    <ul :class="wrapClass">
        <li :class="prevClass">
            <vut-icon type="left-arrow"></vut-icon>
        </li>
        <li v-for="(item, index) in allPage">
            <span>{{index + 1}}</span>
        </li>
        <!-- <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li> -->
        <li :class="nextClass">
            <vut-icon type="right-arrow"></vut-icon>
        </li>
    </ul>
</template>

<script>
    const prefixClass = "vut-page";
    export default {
        name: 'vut-page',
        props: {
            current: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            }
        },
        data() {
            return {
                prefixClass,
                allPage: 0
            }
        },
        computed: {
            wrapClass() {
                return [
                    `${prefixClass}`
                ]
            },
            prevClass() {
                return [
                    `${prefixClass}-prev`
                ]
            },
            nextClass() {
                return [
                    `${prefixClass}-next`
                ]
            }
        },
        watch: {
            total(value) {
                debugger;
                this.allPage = Math.ceil(value / this.pageSize);
            }
        },
        mounted() {
            this.allPage = Math.ceil(this.total / this.pageSize);
        },
    }
</script>

<style scoped>

</style>