<template>
    <span :class="[
            prefix,
            type ? prefix+'-'+type : ''
        ]"
    >
        <slot></slot>
    </span>
</template>

<script>
const prefix = "vut-tag";
export default {
    name: "vut-tag",
    props: {
        type: String
    },
    data(){
        return {
            prefix
        }
    }
}
</script>