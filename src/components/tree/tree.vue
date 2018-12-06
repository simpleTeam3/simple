<template>
    <div
        :class="[prefix]"
    >
        <vut-tree-node v-for="(item, index) in data" :key="index" :node="item"></vut-tree-node>
    </div>
</template>

<script>
import TreeStore from './store/tree-store';
import emitter from '../../mixins/emit';

export default {
    name: 'vutTree',
    props: {
        data: {
            type: Array
        },
        props: {
            default(){
                return {
                    children: 'children',
                    label: 'label'
                }
            }
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'tree'
        }
    },
    created(){
        this.store = new TreeStore({
            data: this.data,
            props: this.props
        })
    },
    methods: {

    }
}
</script>

<style>

</style>
