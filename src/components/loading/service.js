import Vue from 'vue';
import {getOneStyle} from '../../utils/tools.js';
import merge from '../../utils/merge.js';


const Load = Vue.extend(require('./loading.vue'));

const defaults = {
    text : null,
    fullscreen : true,
    body : false
}

let fullscreenLoading;

Load.prototype.originalPosition = '';
Load.prototype.originalOverflow = '';

Load.prototype.close = function(){
    this.$on('after-leave',() => {
        this.$el &&
        this.$el.parentNode &&
        this.$el.parentNode.removeChild(this.$el);
        this.destroy();
    });
    this.visible = false;
}

const Loading = (options = {}) => {
    if(Vue.prototype.$isServer) return;
    //options相关
    options = merge({}, defaults, options);
    if(typeof options.string !== 'string'){
        options.target = document.querySelector(options.string)
    }
    options.target = options.target ? options.target : document.body;
    if(options.target !== document.body){
        options.fullscreen = false;
    }else{
        options.body = true;
    }

    //main
    let parent = options.body ? document.body : options.target;
    let instance = new Load({
        el: document.createElement('div'),
        data: options
    })

    parent.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.visible = true;
    })
    return instance;
}

export default Loading