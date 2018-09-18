<template>
    <div>
        <div>
            <vut-badge value="100">
                <vut-button>新消息</vut-button>
            </vut-badge>
            <vut-badge value="100">
                <vut-button type="primary">新消息</vut-button>
            </vut-badge>
            <vut-badge value="100" :maxValue="99">
                <vut-button>新消息</vut-button>
            </vut-badge>
            <vut-badge value="new">
                <vut-button>新消息</vut-button>
            </vut-badge>
        </div>
        <div>
            <vut-badge dot>
                <vut-button>新消息</vut-button>
            </vut-badge>
            <vut-badge dot>
                <vut-button type="primary">新消息</vut-button>
            </vut-badge>
        </div>
        <div>
            <vut-badge dot>新消息</vut-badge>
            <vut-badge dot>
                <vut-button type="primary">新消息</vut-button>
            </vut-badge>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style>
    .vut-badge{
        margin: 10px 10px;
    }
</style>