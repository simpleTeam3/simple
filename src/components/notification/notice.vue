<template>
    <transition :name="prefix + '-fade'">
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
            <i :class="['vut-icon-close', prefix + '-close'] "></i>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'vutNotification',
    data(){
        return {
            prefix: this.global.prefix + 'notification',
            title: '',
            content: '',
            position: 'top-right'
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
