<template>
    <div class="breadcrumb-demo">
        <div>
            <p>基础用法</p>
            <vut-breadcrumb>
                <vut-breadcrumb-item>首页</vut-breadcrumb-item>
                <vut-breadcrumb-item>图书</vut-breadcrumb-item>
                <vut-breadcrumb-item>诗歌</vut-breadcrumb-item>
                <vut-breadcrumb-item>海子</vut-breadcrumb-item>
                <vut-breadcrumb-item>九月</vut-breadcrumb-item>
            </vut-breadcrumb>
        </div>
        <div>
            <p>带路由或链接跳转</p>
            <vut-breadcrumb>
                <vut-breadcrumb-item :to="{path: '/radio'}">radio</vut-breadcrumb-item>
                <vut-breadcrumb-item :to="{path: '/input'}">input</vut-breadcrumb-item>
                <vut-breadcrumb-item :to="{path: '/button'}">button</vut-breadcrumb-item>
                <vut-breadcrumb-item>海子</vut-breadcrumb-item>
                <vut-breadcrumb-item :to="{path: '/breadcrumb'}">九月</vut-breadcrumb-item>
            </vut-breadcrumb>
        </div>
        <div>
            <p>自定义图标或Html</p>
            <vut-breadcrumb separator=">">
                <vut-breadcrumb-item>首页</vut-breadcrumb-item>
                <vut-breadcrumb-item>图书</vut-breadcrumb-item>
                <vut-breadcrumb-item>诗歌</vut-breadcrumb-item>
                <vut-breadcrumb-item>海子</vut-breadcrumb-item>
                <vut-breadcrumb-item>九月</vut-breadcrumb-item>
            </vut-breadcrumb>
            <vut-breadcrumb separatorClass="vut-icon-coordinates">
                <vut-breadcrumb-item>首页</vut-breadcrumb-item>
                <vut-breadcrumb-item>图书</vut-breadcrumb-item>
                <vut-breadcrumb-item>诗歌</vut-breadcrumb-item>
                <vut-breadcrumb-item>海子</vut-breadcrumb-item>
                <vut-breadcrumb-item>九月</vut-breadcrumb-item>
            </vut-breadcrumb>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.breadcrumb-demo > div{
    margin-top: 40px;
}
</style>

