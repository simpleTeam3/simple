<template>
    <div
        :class="[prefix]"
    >
        <div :class="prefix + '-content'">
            <p>{{item.label}}</p>
        </div>

        <div :class="prefix + '-children'"></div>
    </div>
</template>

<script>
export default {
    name: "vutTreeNode",
    props: {
        item: Object
    },
    data(){
        return {
            prefix: this.global.prefix + 'tree-node'
        }
    }
}
</script>
