<template>
    <div :class="[prefix, this.position]">
        <i></i>
        <div :class="prefix + '-wrap'">
            <h3 :class="prefix + '-header'">{{title}}</h3>
            <div :class="prefix + '-content'">
                <slot>
                    <p>{{content}}</p>
                </slot>
            </div>
        </div>
        <i class="vut-icon-close"></i>
    </div>
</template>

<script>
export default {
    name: 'vutNotification',
    props: {
        title: {
            type: String,
            default: "这是一个title"
        },
        content: {
            type: String,
            default: "这是一个content有很多的内容，而且可以关闭"
        },
        position: {
            type: String,
            default: 'right'
        }
    },
    data(){
        return {
            prefix: this.global.prefix + 'notification'
        }
    },
    computed: {
        notificationClass(){
        }
    }
}
</script>

<style>

</style>
