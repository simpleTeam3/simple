/*
* @Author: Sauce
* @Date:   2018-01-20 15:46:47
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-07-28 16:50:44
*/
import Loading from './loading.vue'
import directive from './directive'
export default {
    install(){
        Vue.use(directive);
    },
    Loading,
    directive
};