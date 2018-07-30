import Input from './components/input';
import Button from './components/button';
import Table from './components/table';
import Switch from './components/switch';
import InputNumber from './components/inputNumber';
import Icon from './components/icon';
import Message from './components/message';
import ToolTip from './components/toolTip';
import Loading from './components/loading';

const Simple = {
	Input,
	Button,
	Table,
	Switch,
	InputNumber,
	Icon,
	Message,
	ToolTip,
	Loading:Loading.Loading
};

const install = function(Vue){
	Object.keys(Simple).forEach(function(key){
		Vue.component(Simple[key].name, Simple[key]);
	})

	Vue.use(Loading.directive);

	Vue.prototype.$loading = Loading.service;
	Vue.prototype.$Message = Message;
}

if(window && window.Vue){
	install(window.Vue);
}

export default Object.assign(Simple, {install});
