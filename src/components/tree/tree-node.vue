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
            <vut-checkbox
                v-if="tree.showCheckbox"
                v-model="checked"
                @on-change="handleCheck"
            ></vut-checkbox>
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
import vutCheckbox from '../checkbox';
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
    components: { vutCheckbox },
    data(){
        return {
            prefix: this.global.prefix + 'tree-node',
            tree: null,
            expanded: this.node.expanded,
            checked: this.node.checked
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

        if (this.tree.checkedList.indexOf(this.node.id) !== -1) {
            this.checked = true;
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
            this.$nextTick(() => this.expanded = newVal);
        }
    },
    methods: {
        getNodeKey(node){
            return getNodeKey(this.nodeKey, node.data);
        },
        handleCollapse() {
            if(this.node.expanded){
                this.expanded = false;
                this.node.collapse();
            }else{
                this.expanded = true;
                this.node.expand();
            }
        },
        handleCheck() {
            this.tree.$emit('tree-node-check', this.node.data.id)
        }
    }
}
</script>
