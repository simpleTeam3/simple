<template>
    <div
        :class="[prefix]"
    ></div>
</template>

<script>
export default {
    name: "vutTreeNode",
    data(){
        return {
            prefix: this.global.prefix + 'tree-node'
        }
    }
}
</script>
