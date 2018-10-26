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
		<nav class="nav">
			<ul class="nav-list">
				<li v-for="(r, index) in routeList.basic" :key="index"><router-link :to="'/'+ r.path">{{r.name}}</router-link></li>
			</ul>
			<ul class="nav-list">
				<li v-for="(r, index) in routeList.navigation" :key="index"><router-link :to="'/'+ r.path">{{r.name}}</router-link></li>
			</ul>
			<ul class="nav-list">
				<li v-for="(r, index) in routeList.form" :key="index"><router-link :to="'/'+ r.path">{{r.name}}</router-link></li>
			</ul>
			<ul class="nav-list">
				<li v-for="(r, index) in routeList.notice" :key="index"><router-link :to="'/'+ r.path">{{r.name}}</router-link></li>
			</ul>
			<ul class="nav-list">
				<li v-for="(r, index) in routeList.data" :key="index"><router-link :to="'/'+ r.path">{{r.name}}</router-link></li>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				routeList: {
					basic: [
						{path: 'button', name: 'Button'},
						{path: 'icon', name: 'Icon'},
					],
					navigation: [
						{path: 'steps', name: 'Steps'},
						{path: 'tabs', name: 'Tabs'},
						{path: 'breadcrumb', name: 'Breadcrumb'},
						{path: 'carousel', name: 'Carousel'}
					],
					form: [
						{path: 'radio', name: 'Radio'},
						{path: 'input', name: 'Input'},
						{path: 'switch', name: 'Switch'},
						{path: 'inputNumber', name: 'inputNumber'},
						{path: 'select', name: 'Select'},
						{path: 'slider', name: 'Slider'},
						{path: 'checkBox', name: 'CheckBox'}
					],
					notice: [
						{path: 'message', name: 'Message'},
						{path: 'tooltip', name: 'ToolTip'},
						{path: 'loading', name: 'Loading'},
						{path: 'tag', name: 'Tag'},
						{path: 'badge', name: 'Badge'},
						{path: 'notification', name: 'Notification'},
						{path: 'modal', name: 'Modal'}
					],
					data: [
						{path: 'table', name: 'Table'},
						{path: 'page', name: 'Page'},
						{path: 'progress', name: 'Progress'}
					],
				}
			}
		}
	}
</script>
<style>
.nav{
	margin-bottom: 50px;
}
.nav-list{
	zoom: 1;
}
.nav-list:after{
	display: block;
	clear: both;
	content: "";
	visibility: hidden;
	height: 0;
}
</style>
