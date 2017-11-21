import Input from './components/input';
import Button from './components/button';
import Table from './components/table';
import Switch from './components/switch';

const Simple = {
	Input,
	Button,
	Table,
	Switch
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
