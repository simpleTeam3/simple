<template>
    <span :class="prefix">
        <!-- main -->
        <span :class="innerClass" ref="link">
            <slot></slot>
        </span>
        <!-- icon or separator -->
        <i v-if="separatorClass" :class="[ prefix+'-separator', separatorClass]"></i>
        <span v-else :class="prefix+'-separator'">{{this.separator}}</span>
    </span>
</template>
<script>
export default {
    name: 'vutBreadcrumbItem',
    inject: ['separator', 'separatorClass'],          //vue^2.2.1版本，注入值在props和data初始化之前得到,还有这个不是响应的
    props: {
        to: {},
    },
    data(){
        return {
            prefix: this.global.prefix + 'breadcrumb-item'
        }
    },
    computed:{
        innerClass(){
            return [
                this.prefix + '-inner',
                this.to ? 'link' : ''
            ]
        }
    },
    mounted(){
        const link = this.$refs.link;
        link.addEventListener('click', _ => {
            const {to, $router} = this;
            if(!to || !$router) return;
            $router.push(to.path);
        })
    }
}
</script>
