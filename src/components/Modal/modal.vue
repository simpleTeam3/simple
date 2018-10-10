<template>
    <div :class="prefix">

    </div>
</template>

<script>
export default {
    data(){
        return {
            prefix: this.global.prefix + 'modal'
        }
    }
}
</script>