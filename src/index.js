import Input from './components/input/input';
import Button from './components/button'

const Simple = {
	Input,
	Button
};

const install = function(Vue){
	Object.keys(Simple).forEach(function(key){
		Vue.component(Simple[key].name, Simple[key]);
	})
}

if(window && window.Vue){
	install(window.Vue);
}

export default Object.assign(Simple, {install}); 