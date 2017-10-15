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
</style>
<template>
	<div class="content-wrap">
		<nav>
			<ul class="nav-list">
				<li><router-link to="/input">Input</router-link></li>
				<li><router-link to="/button">Button</router-link></li>
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