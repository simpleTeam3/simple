<template>
    <div
        :class="[prefix]"
    >
        <vut-tree-node v-for="(item, index) in data" :key="index" :node="item"></vut-tree-node>
    </div>
</template>

<script>
import emitter from '../../mixins/emit'
export default {
    name: 'vutTree',
    props: {
        data: Array
    },
    data(){
        return {
            prefix: this.global.prefix + 'tree'
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
