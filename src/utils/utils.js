/*
 * @author: Sauce
 * @Date: 2018-11-09 09:02
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-11-09 09:06
 */

/*
 * 防重防抖点击
 * @param :function func 		执行函数
 * @param :number   wait 		时间间隔
 * @param :boolean	immediate	是否立即执行
 * 
 * @return :function	返回实际调用函数
 */
export function debounce(func, wait = 1000, immediate = true){
    let timer, context, args;

    const later = () => setTimeout(() => {
		timer = null;
		if(!immediate){
			func.apply(context, args);
			context = args = null;
		}
	}, wait)
		
    return function(...params){
        if(!timer) {
			timer = later();
			if(immediate){
				func.apply(this, params);
			}else{
				context = this;
				args = params;
			}
		}else{
			clearTimeout(timer);
			timer = later();
		}
    }
}
