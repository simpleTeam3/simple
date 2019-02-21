<template>
    <div>
        <vut-menu
            :data="menuData"
            mode="horizontal"
            bg-color="#37495f"
            text-color="#fff"
        >
        </vut-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menuData: [
                {id: 1, name: '角落'},
                {id: 2, name: '歌曲'}
            ]
        }
    }
}
</script>

<style>

</style>
