/*
	*author: sauce
	*time : 2017.10.01
*/

import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './app.vue';
import Simple from '../src/index';
Vue.use(Simple);

//开启debug
Vue.config.debug = true;

new Vue({
	el: '#app',
	render: h => h(App)
})