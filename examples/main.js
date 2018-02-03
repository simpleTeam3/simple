/*
	*author: sauce
	*time : 2017.10.01
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Simple from '../src/index';

Vue.use(VueRouter);
Vue.use(Simple);

//开启debug
Vue.config.debug = true;

const router = new VueRouter({
	routes: [
		{
			path: '/input',
			component: require('./routers/input.vue')
		},
		{
			path: '/button',
			component: require('./routers/ex-button.vue')
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
		}
	]
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
