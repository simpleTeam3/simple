<template>
    <div
        :class="[prefix]"
    >
        <vut-tree-node v-for="(childNode, index) in rootNode.childNodes" :key="index" :node="childNode"></vut-tree-node>
    </div>
</template>

<script>
import TreeStore from './store/tree-store';
import emitter from '../../mixins/emit';

export default {
    name: 'vutTree',
    props: {
        data: {
            type: Array,
            rootNode: null
        },
        dataAttr: {
            default(){
                return {
                    //这个是为了自定义渲染时取值的键值
                    children: 'children',
                    label: 'label'
                }
            }
        },
        indent: {
            type: Number,
            default: 20
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'tree'
        }
    },
    created(){
        this.isTree = true;

        this.store = new TreeStore({
            data: this.data,
            dataAttr: this.dataAttr
        })

        this.rootNode = this.store.rootNode;
    },
    methods: {

    }
}
</script>

<style>

</style>
