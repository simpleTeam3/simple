/*
* @Author: Sauce
* @Date:   2018-01-20 15:46:47
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-07-26 20:11:39
*/
import Loading from './loading.vue'
import directive from './directive'
export default {
    install(){
        Vue.use(directive);
    }
};