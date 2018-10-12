<template>
    <div>
        <vut-button @click="popModal">确认框</vut-button>
        <vut-modal
            title="你知道吗"
            content="你确认要删除吗?"
            :visible.sync="show"
        >
        </vut-modal>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show: false
        }
    },
    methods: {
        popModal(){
            this.show = true;
        }
    }
}
</script>