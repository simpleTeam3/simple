<template>
    <div>
        <vut-button @click="test1()">试试括号</vut-button>
        <vut-button @click="test2">试试</vut-button>
        <vut-tree :data="tree" :showCheckbox="true"></vut-tree>
    </div>
</template>

<script>
import { debounce } from '@/utils/utils'
export default {
    data(){
        return {
            tree: [
                {
                    id: 'key1',
                    label: '一级1',
                    children: [{
                        id: 'key11',
                        label: '二级1-1',
                        children: [
                            {id: 'key111', label: '三级1-1-1'},
                            {id: 'key112', label: '三级1-1-2'}
                        ]
                    },{
                        id: 'key12',
                        label: '二级1-2'
                    }]
                },{
                    id: 'key2',
                    label: '一级2'
                }
            ],
        }
    },
    created(){
        this.isTree = true;                     //树，标志

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
