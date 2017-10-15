import Input from './components/input';
import Button from './components/button';
import Table from './components/table';

const Simple = {
	Input,
	Button,
	Table
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