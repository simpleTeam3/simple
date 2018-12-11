<template>
    <div
        :class="[
            prefix,
            {
                'is-expanded': expanded
            }
        ]"
        :aria-expanded="expanded"
    >
        <div :class="prefix + '-content'" :style="contentStyle">
            <span
                class="vut-icon vut-icon-caret-right"
                v-if="node.childNodes.length"
                @click="handleCollapse"
            ></span>
            <p class="vut-tree-label">{{node.data.label}}</p>
        </div>

        <div 
            :class="prefix + '-children'"
            v-show="expanded"
            :aria-expanded="expanded"
        >
            <vut-tree-node
                v-for="childNode in node.childNodes"
                :node="childNode"
                :key="getNodeKey(childNode)"
            >
            </vut-tree-node>
        </div>
    </div>
</template>

<script>
import { getNodeKey } from './store/tools';

export default {
    name: "vutTreeNode",
    props: {
        node: {
            default(){
                return {};
            }
        },
    },
    data(){
        return {
            prefix: this.global.prefix + 'tree-node',
            tree: null,
            expanded: this.node.expanded
        }
    },
    created(){
        const parent = this.$parent;

        if(parent.isTree){
            this.tree = parent;
        }else{
            this.tree = parent.tree;
        }

        if(this.node.expanded){
            this.expanded = true;
        }
        
    },
    computed: {
        contentStyle(){
            return {
                paddingLeft: (this.node.level - 1) * this.tree.indent + 'px'
            }
        }
    },
    watch: {
        'node.expanded': function(newVal){
            console.log(newVal);
            this.$nextTick(() => this.expanded = newVal);
        }
    },
    methods: {
        getNodeKey(node){
            console.log(getNodeKey(this.nodeKey, node.data));
            return getNodeKey(this.nodeKey, node.data);
        },
        handleCollapse(){
            if(this.node.expanded){
                this.expanded = false;
                this.node.collapse();
            }else{
                this.expanded = true;
                this.node.expand();
            }
        }
    }
}
</script>
