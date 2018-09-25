import global from './common/global';

import Radio from './components/radio'
import Input from './components/input';
import Button from './components/button';
import Table from './components/table';
import Switch from './components/switch';
import InputNumber from './components/inputNumber';
import Icon from './components/icon';
import Message from './components/message';
import ToolTip from './components/toolTip';
import Loading from './components/loading';
import Page from './components/page';
import Select from './components/select';
import Tag from './components/tag';
import Badge from './components/badge';
import Slider from './components/slider';
import Tabs from './components/tabs';
import Breadcrumb from './components/breadcrumb';

const Simple = {
	Radio,
	Input,
	Button,
	Table,
	Switch,
	InputNumber,
	Icon,
	Message,
	ToolTip,
	Loading:Loading.Loading,
	Page,
	Select,
	Tag,
	Badge,
	Slider,
	Tabs,
	TabsPanel: Tabs.Panel,
	Breadcrumb,
	BreadcrumbItem: Breadcrumb.Item
};

const install = function(Vue){
	Object.keys(Simple).forEach(function(key){
		Vue.component(Simple[key].name, Simple[key]);
	})

	Vue.use(Loading.directive);

	Vue.prototype.$loading = Loading.service;
	Vue.prototype.$Message = Message;

	Vue.prototype.global = global;
}

if(window && window.Vue){
	install(window.Vue);
}

export default Object.assign(Simple, {install});
