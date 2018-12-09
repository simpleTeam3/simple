<template>
    <div
        :class="[prefix]"
    >
        <div :class="prefix + '-content'" :style="contentStyle">
            <span
                class="vut-icon vut-icon-caret-right"
                v-if="node.childNodes.length"
                @click="handleCollapse"
            ></span>
            <p class="vut-tree-label">{{node.data.label}}</p>
        </div>

        <div :class="prefix + '-children'" v-show="node.expanded">
            <vut-tree-node
                v-for="(childNode, index) in node.childNodes"
                :node="childNode"
                :key="index"
            >
            </vut-tree-node>
        </div>
    </div>
</template>

<script>

export default {
    name: "vutTreeNode",
    props: {
        node: {
            default(){
                return {};
            }
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'tree-node',
            tree: null,
        }
    },
    created(){
        const parent = this.$parent;

        if(parent.isTree){
            this.tree = parent;
        }else{
            this.tree = parent.tree;
        }
        
    },
    computed: {
        contentStyle(){
            return {
                paddingLeft: (this.node.level - 1) * this.tree.indent + 'px'
            }
        },
        expanded(){
            console.log(this.node)
            return this.node.expanded;
        }
    },
    watch: {
        'node': {
            deep: true,
            handler(){
            }
        },
        'node.expanded': function(newVal){
            console.log(newVal);
            this.$nextTick(() => this.expanded = newVal);
        }
    },
    methods: {
        handleCollapse(){
            if(this.node.expanded){
                this.node.collapse();
            }else{
                this.node.expand();
            }
        }
    }
}
</script>
