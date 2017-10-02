import Input from './components/input/input';

const Simple = {
	Input
};

const install = function(Vue){
	Object.keys(Simple).forEach(function(key){
		Vue.component(key, Simple[key]);
	})
}

if(window && window.Vue){
	install(window.Vue);
}

export default Object.assign(Simple, {install}); 