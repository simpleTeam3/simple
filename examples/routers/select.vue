<template>
    <div class="select-box">
        <vut-select @select="handleSelect">
            <vut-option
                v-for="(o, index) in options"
                :key="index"
                :label="o.label"
                :value="o.value"
            ></vut-option>
        </vut-select>
            <vut-select @select="handleSelect" :filterable="true">
                <vut-option
                    v-for="(o, index) in options"
                    :key="index"
                    :label="o.label"
                    :value="o.value"
                ></vut-option>
            </vut-select>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                options: [
                    {
                        value: 1,
                        label: "睡觉"
                    },
                    {
                        value: 2,
                        label: "吃饭"
                    },
                    {
                        value: 3,
                        label: "打豆豆"
                    },
                    {
                        value: 4,
                        label: "随风"
                    },
                    {
                        value: 5,
                        label: "如画"
                    }
                ]
            }
        },
        methods: {
            handleSelect(obj){
            }
        }
    }
</script>
<style>
.select-box{
    width: 800px;
}
.select-item {
    display: inline-block;
    margin-right: 50px;
}
</style>
