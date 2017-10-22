<style lang="sass">
    @import "../src/style/index.scss";
	.content-wrap{
		width: 85%;
		margin: 30px auto;
	}
	nav{min-height: 60px;}
	.nav-list li{
		float: left;
		margin: 7px;
	}
	.content{
		width: 85%;
		margin: 30px auto;
	}
	.demo-list{
		margin: 30px 0px;
	}
	.title{
		margin-bottom: 18px;
		height: 50px;
		line-height: 20px;
		padding: 15px;
		border-color: #e2e2e2;
		border-style: solid;
    	border-width: 1px 1px 1px 5px;
	}
	.demo-input{width: 200px;}
	.api-label{
		margin-bottom: 10px;
	}
</style>
<template>
	<div class="content-wrap">
		<nav>
			<ul class="nav-list">
				<li><router-link to="/input">Input</router-link></li>
				<li><router-link to="/button">Button</router-link></li>
				<li><router-link to="/table">Table</router-link></li>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				a: 1
			}
		}
	}
</script>
<style></style>