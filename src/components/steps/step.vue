<template>
    <div :class="prefix">
        <!-- line -->
        <div :class="prefix + '-head'">
            <div :class="prefix + '-line'">
                <i></i>
            </div>
            <div :class="prefix + '-icon'"></div>
        </div>
        <!-- main -->
        <div :class="prefix + '-main'">
            <div :class="prefix + '-title'">
                <slot name="title">{{title}}</slot>
            </div>
            <div :class="prefix + '-description'"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vutStep',
    props: {
        title: String
    },
    data(){
        return {
            prefix: this.global.prefix + 'step'
        }
    }
}
</script>
