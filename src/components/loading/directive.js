import Vue from 'vue'
import {getOneStyle} from '../../utils/tools'
let Load = Vue.extend(require('./loading.vue'));

export default {
    install: Vue => {
        if(Vue.prototype.$isServer) return;

        let insertDom = (parent, el, binding) =>{
            if(!el.domVisible && getOneStyle(el, 'display') !== 'none' && getOneStyle(el, 'visibility') !== 'hidden'){
                parent.appendChild(el);
			
				if(el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed'){
					parent.style.position = 'relative';
				}

                el.instance.visible = true;
                Vue.nextTick(() => {
                    el.instance.visible = true;
				})
				el.domInsert = true;
            }
        }
        
        Vue.directive('loading', {
            bind : function(el, binding) {
                let load = new Load({
                    el : document.createElement('div'),
                    data : {
                        text : el.getAttribute('loading-text'),
                        fullscreen : !!binding.modifires.fullscreen
                    }
                })

                el.instance = load;
                el.mask = load.$el;
                
            } 
        })
    }
}