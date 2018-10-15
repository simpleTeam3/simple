import Vue from 'vue';
import modal from './modal';

const modalConstructor = Vue.extend(modal);
let instance;

modal.confirm = (options = {}) => {
    options = options || {};
    
    instance = new modalConstructor({
        data: options
    })
    instance.$mount();
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.visible = true;
    });

    return instance;
}
modalConstructor.prototype.close = function() {
    this.$on('after-leave', () => {
        this.$el && 
        this.$el.parentNode && 
        this.$el.parentNode.removeChild(this.$el) && 
        this.$destroy();
    })
    this.visible = false;
}


export default modal;