<template>
    <div>
        <div class="demo-box">
            <p>我就像这个世界</p>
            <p>这个世界是不会变的</p>
            <p>我就像这个世界</p>
            <p>这个世界是不会变的</p>
            <p>我就像这个世界,这个世界是不会变的</p>
            <p>这个世界是不会变的</p>
            <p>我就像这个世界,这个世界是不会变的</p>
            <p>这个世界是不会变的</p>
            <p>我就像这个世界,这个世界是不会变的</p>
            <vut-loading :visible='true' :full='false' text="皮呀皮呀皮"></vut-loading>
        </div>
        <div class="title">自定义指令调用</div>
        <button @click="toggle">开始加载</button>
        <div class="demo-box" v-loading="loadingShow" vut-loading-text="我看看">
            <p>正是因为爱你，让我有了面对死亡的勇气</p>
            <p>正是因为爱你，让我有了面对死亡的勇气</p>
            <p>正是因为爱你，让我有了面对死亡的勇气</p>
            <p>正是因为爱你，让我有了面对死亡的勇气</p>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            loadingShow:false
        }
    },
    mounted: function(){
        let load = this.$loading();
        setTimeout(_ => {
            load.close();
        },1000);
    },
    methods: {
        toggle : function(){
            this.loadingShow = !this.loadingShow;
        }
    }
}
</script>
<style>
.demo-box{
    position:relative;
}
</style>
