<template>
    <div>
        <vut-layout>
            <vut-header>header</vut-header>
            <vut-layout>
                <vut-sidebar>sidebar</vut-sidebar>
                <vut-main>main</vut-main>
            </vut-layout>
        </vut-layout>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.vut-header{
    background: #677180;
}
.vut-sidebar{
    background: #99a9bf;
}
.vut-main{
    background: #e2ebf3;
}
</style>
