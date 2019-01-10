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
            <vut-card
                :style="imgCard"
                :cover="imgSrc"
                imgTitle="猪年快乐"
                imgDescription="不容易啊"
                hoverabled
            >
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
import zhunian from "../../public/image/zhuniankuaile.png"

export default {
    data(){
        return {
            style: {
                width: "280px"
            },
            imgCard: {
                width: "300px"
            },
            imgSrc: zhunian
        }
    }
}
</script>

<style>
.vut-card{
    margin-right: 20px;
}
</style>
