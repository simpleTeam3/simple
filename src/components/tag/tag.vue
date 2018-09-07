<template>
    <span :class="[
            prefix,
            prefix+'-'+type
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
        type: {
            type: String,
            default: "default"
        }
    },
    data(){
        return {
            prefix
        }
    }
}
</script>