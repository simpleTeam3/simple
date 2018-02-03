<style>
	p{
		margin: 10px 0px;
	}
    .vut-button {
        display: inline-block;
        padding: 7px 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
<template>
	<div>
		<div class="demo-list">
			<div>
                <div class="title">Message组件实例</div>
                <div class="vut-button" @click="infoNotice">普通提示</div>
                <div class="vut-button" @click="successNotice">成功提示</div>
                <div class="vut-button" @click="warningNotice">警告提示</div>
                <div class="vut-button" @click="errorNotice">错误提示</div>
            </div>
            <div>
                <p>带有颜色的提示</p>
                <div class="vut-button" @click="infoFn">普通提示</div>
                <div class="vut-button" @click="successFn">成功提示</div>
                <div class="vut-button" @click="warningFn">警告提示</div>
                <div class="vut-button" @click="errorFn">错误提示</div>
            </div>
            <div>
                <p>带有颜色的提示</p>
                <div class="vut-button" @click="infoCloseFn">带有关闭的提示</div>
            </div>

		</div>
		<!-- API -->
		<div class="demo-list">
			<div class="title">API</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
			}
		},
		mounted() {
			window.Simple = this;
		},
		methods: {
            infoNotice() {
                this.$Message.info("这是一个普通的提示");
            },
            successNotice() {
                this.$Message.success("这是一个成功的提示");
            },
            warningNotice() {
                this.$Message.warning("这是一个警告的提示");
            },
            errorNotice() {
                this.$Message.error("这是一个错误的提示");
            },
            infoFn() {
                this.$Message.info("这是一个普通的提示", true);
            },
            successFn() {
                this.$Message.success("这是一个成功的提示", true);
            },
            warningFn() {
                this.$Message.warning("这是一个警告的提示", true);
            },
            errorFn() {
                this.$Message.error("这是一个错误的提示", true);
            },
            infoCloseFn() {
                this.$Message.info({
                    content: "这是一个带有关闭的提示",
                    closable: true,
                    duration: 10000
                });
            }
		}
	}
</script>
