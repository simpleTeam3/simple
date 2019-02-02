<template>
    <div
        :class="[prefix]"
    >
        <vut-tree-node
            v-for="childNode in rootNode.childNodes"
            :key="getNodeKey(childNode)"
            :node="childNode"
        ></vut-tree-node>
    </div>
</template>

<script>
import TreeStore from './store/tree-store';
import { getNodeKey } from './store/tools';
import emitter from '../../mixins/emit';
import VutTreeNode from './tree-node.vue';

export default {
    name: 'vutTree',
    components: { VutTreeNode },
    props: {
        data: {
            type: Array,
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
        },
        nodeKey: String,
        lazy: {                                            //懒加载
            type: Boolean,
            default: false
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
        getNodeKey(node){
            return getNodeKey(this.nodeKey, node.data)
        }
    }
}
</script>

<style>

</style>
