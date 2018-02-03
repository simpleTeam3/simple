import Vue from 'vue';
import Message from "./main.vue";

let MessageConstructor = Vue.extend(Message);
let instance = null;
let instanceArray = [];
const messageGroup = {
    className: "vut-message-group",
    ref: "message",
    instance: null
};
function creatElementNode() {
    messageGroup.instance = new Vue({
        render: function(h) {
            return h("div", {
                attrs: {
                    class: messageGroup.className
                },
                ref: messageGroup.ref
            })
        }
    }).$mount();
    document.body.appendChild(messageGroup.instance.$el);
}
function messageFn(option, type = "info", diffColor = false) {
    let _option = {};
    if(typeof option == "string" || Number(option)) {
        _option.content = option;
        _option.diffColor = diffColor;
    }else if(option.constructor === Object) {
        if(!option.content) {
            option.content = '';
        }
        _option = option;
    }else {
        _option.content = '';
    }
    _option.type = type;
    if(!instance) {
        creatElementNode();
    }
    instance = new MessageConstructor({
        propsData: _option
    });
    instance.vm = instance.$mount();
    messageGroup.instance.$refs[messageGroup.ref].appendChild(instance.vm.$el);
    instance.vm.isShow = true;
    instanceArray.push(instance.vm);
    return instance.vm;
}

export default {
    name: 'Message',
    info(option, diffColor = false) {
        return messageFn(option, "info", diffColor);
    },
    success(option, diffColor = false) {
        return messageFn(option, "success", diffColor);
    },
    warning(option, diffColor = false) {
        return messageFn(option, "warning", diffColor);
    },
    error(option, diffColor = false) {
        return messageFn(option, "error", diffColor);
    },
    destroy() {
        for(let i=0; i<instanceArray.length; i++) {
            // instanceArray[i].$el.parentNode.removeChild(instanceArray[i].$el);
            instanceArray[i].close(true);
        }
        instanceArray = [];
    }
}
