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
		margin: 10px 0px;
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
		margin: 10px 0px;;
	}
    .api ul {
		padding-left: 40px;
    	list-style-type: disc;
	}
	.api li{
		margin-bottom: 5px;
		font-size: 14px;
	}
	code {
		display: inline-block;
	    background: #f7f7f7;
	    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
	    margin: 0 3px;
	    padding: 1px 5px;
	    border-radius: 3px;
	    color: #666;
	    border: 1px solid #eee;
	}
    .api, p {
		margin: 15px 0px;
	}
</style>
<template>
	<div class="content-wrap">
		<nav>
			<ul class="nav-list">
				<li><router-link to="/radio">radio</router-link></li>
				<li><router-link to="/input">Input</router-link></li>
				<li><router-link to="/button">Button</router-link></li>
				<li><router-link to="/table">Table</router-link></li>
				<li><router-link to="/switch">Switch</router-link></li>
				<li><router-link to="/inputNumber">inputNumber</router-link></li>
				<li><router-link to="/icon">Icon</router-link></li>
                <li><router-link to="/message">Message</router-link></li>
				<li><router-link to="/toolTip">ToolTip</router-link></li>
				<li><router-link to="/loading">Loading</router-link></li>
				<li><router-link to="/page">Page</router-link></li>
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
