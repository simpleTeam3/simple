<template>
    <div>
        <div>
            <vut-card :cardStyle="style">
                <p slot="header">我是标题</p>
                <div>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                </div>
            </vut-card>
            <vut-card :cardStyle="style" hoverabled>
                <p slot="header">我是标题</p>
                <div>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                </div>
            </vut-card>
        </div>
        <div>
            <vut-card :cardStyle="style">
                <div>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                </div>
            </vut-card>
            <vut-card :cardStyle="style" hoverabled>
                <p slot="header">我是标题</p>
                <div>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                    <p>我是内容</p>
                </div>
            </vut-card>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            style: {
                width: "280px"
            }
        }
    }
}
</script>

<style>
.vut-card{
    margin-right: 20px;
}
</style>
