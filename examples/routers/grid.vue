<template>
    <div>
        <vut-row>
            <vut-col :span="12"><div class="text20 bg-purple">12</div></vut-col>
            <vut-col :span="12"><div class="text20 bg-purple-light">12</div></vut-col>
        </vut-row>
        <vut-row>
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple-light">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple-light">6</div></vut-col>
        </vut-row>
        <vut-row>
            <vut-col :span="7"><div class="text20 bg-purple">7</div></vut-col>
            <vut-col :span="10"><div class="text20 bg-purple-light">10</div></vut-col>
            <vut-col :span="7"><div class="text20 bg-purple">7</div></vut-col>
        </vut-row>
        <vut-row :gutter="20">
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple-light">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple-light">6</div></vut-col>
        </vut-row>
        <vut-row :gutter="20">
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
            <vut-col :span="6" :offset="6"><div class="text20 bg-purple-light">6</div></vut-col>
        </vut-row>
        <vut-row :gutter="20" flex justify="center">
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
            <vut-col :span="6"><div class="text20 bg-purple">6</div></vut-col>
        </vut-row>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.text20{
    margin-bottom: 15px;
    text-align: center;
    padding: 20px 0;
}
.bg-purple{
    background: #99a9bf;
}
.bg-purple-dark{
    background: #677180;
}
.bg-purple-light{
    background: #e2ebf3;
}
</style>
