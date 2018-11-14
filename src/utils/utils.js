/*
 * @author: Sauce
 * @Date: 2018-11-09 09:02
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-11-09 09:06
 */

/*
 * 防重防抖点击
 * @param :function func 执行函数
 * @param :wait     number 时间间隔
 */
export function debounce(func, wait = 1000){
    let timer = 0;

    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait)
    }
}
