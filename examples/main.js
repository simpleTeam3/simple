/*
	*author: sauce
	*time : 2017.10.01
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Simple from '../src/index.js';

Vue.use(VueRouter);
console.log(Simple);
Vue.use(Simple);

//开启debug
Vue.config.debug = true;

const router = new VueRouter({
	routes: [
		{
			path: '/radio',
			component: require('./routers/radio.vue')
		},
		{
			path: '/input',
			component: require('./routers/input.vue')
		},
		{
			path: '/button',
			component: require('./routers/button.vue')
		},
		{
			path: '/table',
			component: require('./routers/table.vue')
		},
		{
			path: '/switch',
			component: require('./routers/switch.vue')
		},
		{
			path: '/inputNumber',
			component: require('./routers/inputNumber.vue')
		},
		{
			path: '/icon',
			component: require('./routers/icon.vue')
		},
		{
			path: '/message',
			component: require('./routers/message.vue')
		},
		{
			path: '/toolTip',
			component: require('./routers/toolTip.vue')
		},
		{
			path: '/loading',
			component: require('./routers/loading.vue')
		},
		{
			path: '/page',
			component: require('./routers/page.vue')
		},
		{
			path: '/select',
			component: require('./routers/select.vue')
		},
		{
			path: '/tag',
			component: require('./routers/tag.vue')
		},
		{
			path: '/badge',
			component: require('./routers/badge.vue')
		},
		{
			path: '/slider',
			component: require('./routers/slider.vue')
		},
		{
			path: '/tabs',
			component: require('./routers/tabs.vue')
		},
		{
			path: '/breadcrumb',
			component: require('./routers/breadcrumb.vue')
		},
		{
			path: '/steps',
			component: require('./routers/steps.vue')
		},
		{
			path: '/checkbox',
			component: require('./routers/checkbox')
		},
		{
			path: '/progress',
			component: require('./routers/progress')
		},
		{
			path: '/notification',
			component: require('./routers/notification')
		},
		{
			path: '/modal',
			component: require('./routers/modal')
		},
		{
			path: '/carousel',
			component: require('./routers/carousel')
		},
		{
			path: '/tree',
			component: require('./routers/tree')
		},
		{
			path: '/upload',
			component: require('./routers/upload')
		},
		{
			path: '/card',
			component: require('./routers/card')
		},
		{
			path: '/grid',
			component: require('./routers/grid')
		},
		{
			path: '/layout',
			component: require('./routers/layout')
		},
		{
			path: '/menu',
			component: require('./routers/menu')
		},
		{
			path: '/form',
			component: require('./routers/form')
		}
	]
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
