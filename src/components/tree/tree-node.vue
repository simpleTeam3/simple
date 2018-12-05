<template>
    <div
        :class="[prefix]"
    >
        <div :class="prefix + '-content'">
            <p>{{node.label}}</p>
        </div>

        <div :class="prefix + '-children'">
            <vut-tree-node
                v-for="(item, index) in node.childNodes"
                :node="item"
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
            prefix: this.global.prefix + 'tree-node'
        }
    },
    computed: {
        contentStyle(){
            return {
                'padding-left': 1
            }
        }
    }
}
</script>
