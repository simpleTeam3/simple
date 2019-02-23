/*
 * @author: Sauce
 * @Date: 2018-11-09 09:02
 * @Last Modified by: Sauce
 * @Last Modified time: 2019-02-23 20:25:59
 */

/** 
 * 防重防抖点击
 * @param {function} func 		执行函数
 * @param {number}   wait 		时间间隔
 * @param {boolean}	immediate	是否立即执行
 * 
 * @return :function	返回实际调用函数
 */
export function debounce(func, wait = 2000, immediate = true){
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

/**
 * 获取颜色, 拆成三种基本色
 * @param {string} color 	颜色
 * 
 * @return {object}			red, green, blue
 */
export function getColorChannels(color) {
	if(/^[1-9a-fA-F]{3}$/.test(color)){
		for(let i = 2; i > 0; i++){
			color.splice(i, 0, color[i]);
		}
	}
	if(/^[1-9a-fA-F]{6}$/.test(color)) {
		return {
			red: parseInt(color.slice(0,2), 16),
			green: parseInt(color.slice(2,4), 16),
			blue: parseInt(color.slice(4,6), 16)
		}
	}else{
		return {
			red: 255,
			green: 255,
			blue: 255
		}
	}
}

/**
 * 处理颜色变深或变浅
 * @param {string} color	待处理颜色
 * @param {string} percent	变浅或变深程度, -的为变浅
 * 
 * @return {string} 'rgb(255, 255, 255)
 */
export function handleColor(color, percent) {
	color = color.replace('#','');
	let { red, blue, green } = getColorChannels(color);
	if (percent > 0) {
		red *= 1 - percent;
		green *= 1 - percent;
		blue *= 1- percent;
	} else {
		red += (255 - red) * percent;
		green += (255 - green) * percent;
		blue += (255 - blue) * percent;
	}
	return `rgb(${red}, ${green}, ${blue})`;
}