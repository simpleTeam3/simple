<template>
    <div :class="prefix">
        <vut-input
            :readonly="true"
            :size="size"
        >
            <vut-icon slot="suffix" type="bottom-arrow"></vut-icon>
        </vut-input>
    </div>
</template>
<script>
    import VutInput from '../input';
    export default {
        name: 'vutSelect',
        props: {
            size: {
                type: String,
                default: 'smaller'
            }
        },
        data(){
            return{
                prefix: this.global.prefix + 'select'
            }
        },

        components: {
            VutInput
        },

        method: {

        }
    }
</script>