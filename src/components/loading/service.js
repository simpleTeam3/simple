import Vue from 'vue';
import {getOneStyle} from '../../utils/tools.js';

const Load = Vue.extend(require('./loading.vue'));

const defaults = {
    text : null,
    fullscreen : true
}

let fullscreenLoading;

Load.prototype.originalPosition = '';
Load.prototype.originalOverflow = '';

const Loading = (options = {}) => {
    let instance = new Load({
        el: document.createElement('div'),
        data: options
    })

    parent.appendChild(instance.$el)
}