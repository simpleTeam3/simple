<template>
    <vut-button @click="handleClick">防抖</vut-button>
</template>

<script>
import {debounce} from '@/utils/utils';
export default {
    name: 'vutTree',
    methods: {
        handleClick: function(){
            debounce(this.fetchData)();
        },
        fetchData: function(){
            console.log("1");;
        }
    }
}
</script>

<style>

</style>
