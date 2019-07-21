<template>
    <div class="ex-form">
        <vut-form :model="form" :rules="rules">
            <vut-form-item prop='name'>
                <vut-input />
            </vut-form-item>
            <vut-form-item prop='mobile'>
                <vut-input />
            </vut-form-item>
            <vut-form-item>
                <vut-radio>北京</vut-radio>
            </vut-form-item>
        </vut-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                mobile: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', }
                ],
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' }
                ]
            }
        }
    }
}
</script>

<style>
.ex-form{
    width: 300px;
}
</style>
