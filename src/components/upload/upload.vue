<template>
    <div :class="prefix">
        <vut-uploadBasic>
            <slot name="trigger"></slot>
            <slot></slot>
        </vut-uploadBasic>
        <slot name="extra"></slot>
    </div>
</template>
<script>
export default {
    name: "vutUpload",
    data(){
        return {
            prefix: this.global.prefix + 'upload'
        }
    },
    methods: {
    }
}
</script>
