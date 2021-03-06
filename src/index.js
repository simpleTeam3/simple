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
import Steps from './components/steps';
import Checkbox from './components/checkbox';
import Progress from './components/progress';
import Notification from './components/notification';
import Modal from './components/modal';
import Carousel from './components/carousel';
import Tree from './components/tree';
import Upload from './components/upload';
import Card from './components/card';
import Grid from './components/grid';
import { Layout, Header, Sidebar, Main, Footer} from './components/layout';
import Menu from './components/menu';
import Form from './components/form';

const Simple = {
	Radio,
	RadioGroup: Radio.RadioGroup,
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
	SelectDropdown: Select.Dropdown,
	Option: Select.Option,
	Tag,
	Badge,
	Slider,
	Tabs,
	TabsPanel: Tabs.Panel,
	Breadcrumb,
	BreadcrumbItem: Breadcrumb.Item,
	Steps: Steps,
	Step: Steps.Step,
	Checkbox,
	CheckboxGroup: Checkbox.CheckboxGroup,
	Progress,
	Notification: Notification,
	Modal,
	Carousel,
	CarouselItem: Carousel.Item,
	Tree,
	Upload: Upload,
	Card: Card,
	Row: Grid.Row,
	Col: Grid.Col,
	Layout,
	Header,
	Sidebar,
	Main,
	Footer,
	Menu: Menu.Menu,
	MenuItem: Menu.MenuItem,
	Form: Form,
	FormItem: Form.FormItem
};

const install = function(Vue){
	Object.keys(Simple).forEach(function(key){
		Vue.component(Simple[key].name, Simple[key]);
	})

	Vue.use(Loading.directive);

	Vue.prototype.$loading = Loading.service;
	Vue.prototype.$Message = Message;
	Vue.prototype.$notify = Notification;
	Vue.prototype.$confirm = Modal.confirm;

	Vue.prototype.global = global;
}

if(window && window.Vue){
	install(window.Vue);
}

export default Object.assign(Simple, {install});
