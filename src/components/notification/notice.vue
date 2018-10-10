<template>
    <transition name="vut-notification-fade">
        <div :class="[prefix, this.horizontalPosition, this.verticalPosition]"
            v-show="visible"
        >
            <i></i>
            <div :class="prefix + '-wrap'">
                <h3 :class="prefix + '-header'">{{title}}</h3>
                <div :class="prefix + '-content'">
                    <slot>
                        <p>{{content}}</p>
                    </slot>
                </div>
            </div>
            <i :class="['vut-icon-close', prefix + '-close']" @click="close"></i>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'vutNotification',
    data(){
        return {
            prefix: this.global.prefix + 'notification',
            visible: false,
            title: '',
            content: '',
            verticalPosition: 'top',
            horizontalPosition: 'right'
        }
    },
    computed: {
        notificationClass(){
        }
    },
    methods: {
        close(){
            this.visible = false;
        }
    }
}
</script>

<style>

</style>
