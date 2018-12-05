<template>
    <div>
        <vut-button @click="test1()">试试括号</vut-button>
        <vut-button @click="test2">试试</vut-button>
        <vut-tree :data="tree"></vut-tree>
    </div>
</template>

<script>
import { debounce } from '@/utils/utils'
export default {
    data(){
        return {
            tree: [{
                label: '平安',
                childNodes: [{
                    label: '科技'
                },{
                    label: '银行'
                }]
            },{
                label: '一会是风'
            }]
        }
    },
    created(){
        this.test2 = debounce(this.test2);
    },
    methods: {
        test1(){
            console.log("1执行了");
            return function(){
                console.log("1的回调执行了")
            }
        },
        test2(){
            console.log("2执行了");
        }
    }
}
</script>

<style>

</style>
