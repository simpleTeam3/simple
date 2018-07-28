import Vue from 'vue'
import {getOneStyle} from '../../utils/tools'
let Load = Vue.extend(require('./loading.vue'));

export default {
    install: Vue => {
        if(Vue.prototype.$isServer) return;
        
        let toggleLoading = function(el, binding){
            if(binding.value){
                Vue.nextTick(() => {
                    if(binding.modifiers.fullscreen){
						insertDom(document.body, el, binding);
					}else{
						insertDom(el, el, binding);
					}
                })
            }
        }
        let insertDom = (parent, el, binding) =>{
            if(!el.domVisible && getOneStyle(el, 'display') !== 'none' && getOneStyle(el, 'visibility') !== 'hidden'){
			
				if(el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed'){
					parent.style.position = 'relative';
				}

                el.domVisible = true;
                parent.appendChild(el.mask);
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
                    }
                })

                el.instance = load;
                el.mask = load.$el;
				
				toggleLoading(el, binding)
            } 
        })
    }
}