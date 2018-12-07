<template>
    <div
        :class="[prefix]"
    >
        <div :class="prefix + '-content'" :style="contentStyle">
            <p>{{node.data.label}}</p>
        </div>

        <div :class="prefix + '-children'">
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
        node: Object
    },
    data(){
        return {
            prefix: this.global.prefix + 'tree-node',
            tree: null
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
        }
    }
}
</script>
