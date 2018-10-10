import Vue from 'vue';
import Notice from './notice';
const NoticeConstructor = Vue.extend(Notice)

let instance;

const Notification = function(options){
    options = options || {}
    const position = options.position || 'top-right';

    instance = new NoticeConstructor({
        data: options
    })
    instance.$mount();
    document.body.appendChild(instance.$el);

    return instance;
}

export default Notification;