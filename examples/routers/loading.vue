<template>
    <div>
        <div class="demo-box">
            <p>我就像这个世界</p>
            <p>这个世界是不会变的</p>
            <p>我就像这个世界</p>
            <p>这个世界是不会变的</p>
            <p>我就像这个世界,这个世界是不会变的</p>
            <vut-loading :visible='true' text="世界和平" :fullscreen='false'></vut-loading>
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
.demo-box{
    position:relative;
}
</style>
