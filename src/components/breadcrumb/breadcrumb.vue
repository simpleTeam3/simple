<template>
    <div :class="prefix">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'vutBreadcrumb',
    props: {
        separator: {
            type: String,
            default: '/'
        },
        separatorClass: {
            type: String,
            default: ''
        }
    },
    provide(){
        return {
            separator: this.separator,
            separatorClass: this.separatorClass
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'breadcrumb'
        }
    }
}
</script>
