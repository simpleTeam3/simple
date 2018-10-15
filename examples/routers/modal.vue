<template>
    <div>
        <vut-button @click="popModal">确认框</vut-button>
        <vut-modal
            modalTitle="你知道吗"
            modalContent="你确认要删除吗?"
            :visible.sync="show"
        >
        </vut-modal>
        <vut-button type="warning" @click="confirm">服务调用</vut-button>
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
        },
        confirm(){
            let modal2 = this.$confirm({
                title: '很久以前',
                content: '乌卡西～乌卡西！',
                onCancel: () => {
                    console.log("cancel");
                    modal2.close();
                },
                onOK: () => {
                    console.log("ok");
                }
            });
        }
    }
}
</script>