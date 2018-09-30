<template>
    <div :class="prefix">

    </div>
</template>

<script>
export default {
    name: 'vutNotification',
    data(){
        return {
            prefix: this.prefix + 'notification'
        }
    }
}
</script>

<style>

</style>
