import Vue from 'vue'
import {getOneStyle, addClass, removeClass} from '../../utils/tools'
let Load = Vue.extend(require('./loading.vue'));

export default {
    install: Vue => {
        if(Vue.prototype.$isServer) return;
        
        let toggleLoading = (el, binding) => {
            if(binding.value){
                Vue.nextTick(() => {
                    if(binding.modifiers.fullscreen){
						el.originalPosition = getOneStyle(document.body, 'position');
						el.originalOverflow = getOneStyle(document.body, 'overflow');

						addClass(el.mask, 'is-fullscreen')
						insertDom(document.body, el, binding);
					}else{
						removeClass(el.mask, 'is-fullscreen');
						el.originalPosition = getOneStyle(el, 'position');
						insertDom(el, el, binding);
					}
                })
            }else{
				if(el.domVisible){
					el.instance.$on('after-leave', _ => {
						el.domVisible = false;
					})

					el.instance.visible = false;
				}
			}
        };
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
						attrText : el.getAttribute('vut-loading-text')
                    }
                })

                el.instance = load;
                el.mask = load.$el;
				
				toggleLoading(el, binding)
			},
			update : function(el, binding) {
				if(binding.value !== binding.oldValue){
					toggleLoading(el, binding);
				}
			},
			unbind : function(el, binding) {
				if(el.domInsert){
					if(binding.modifiers.fullscreen){
						document.body.removeChild(el.mask);
					}else{
						el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
					}
				}
			}
        })
    }
}