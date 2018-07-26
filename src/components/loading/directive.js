import Vue from 'vue'
import {getOneStyle} from '../../utils/tools'
let Load = Vue.extend(require('./loading.vue'));

export default {
    install: Vue => {
        if(Vue.prototype.$isServer) return;

        let insertDom = (parent, el, binding) =>{

        }
        
        Vue.directive('loading', {
            bind : function(el, binding) {

            } 
        })
    }
}