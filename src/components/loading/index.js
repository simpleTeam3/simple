/*
* @Author: Sauce
* @Date:   2018-01-20 15:46:47
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-07-30 21:01:01
*/
import Loading from './loading.vue'
import directive from './directive'
import service from './service'
export default {
    install(){
        Vue.use(directive);
    },
    Loading,
    directive,
    service
};