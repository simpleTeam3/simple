<template>
    <div :class="stepClass">
        <!-- line -->
        <div :class="prefix + '-head'">
            <div :class="prefix + '-line'">
                <i :class="prefix + '-line-inner'"></i>
            </div>
            <div :class="prefix + '-icon'">
                <slot name="icon">
                    <div :class="prefix + '-icon-inner'">{{index + 1}}</div>
                </slot>
            </div>
        </div>
        <!-- main -->
        <div :class="prefix + '-main'">
            <div :class="prefix + '-title'">
                <slot name="title">{{title}}</slot>
            </div>
            <div :class="prefix + '-description'">{{description}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vutStep',
    props: {
        title: String,
        description: String
    },
    data(){
        return {
            prefix: this.global.prefix + 'step',
            index: -1
        }
    },
    computed: {
        currentStatus(){
            return this.index <= this.$parent.activeStep ? (                //感觉并不好读
                this.index == this.$parent.activeStep ? 'active' : 'done'
            ) : 'wait';
        },
        stepClass(){
            return [
                this.prefix,
                `${this.prefix}-${this.$parent.direction}`,
                'is-' + this.currentStatus
            ]
        }
    },
    beforeCreate(){
        this.$parent.steps.push(this)
    }
}
</script>
