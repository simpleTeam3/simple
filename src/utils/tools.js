/*
* @Author: liye
* @Date:   2017-12-26 20:03:40
 * @Last Modified by: Sauce
 * @Last Modified time: 2018-07-28 18:29:02
*/

export function insideOf(value, list) {
	for(let i = 0; i < list.length; i++){
		if(value == list[i]) return true;
	}
	return false;
}

/**
 * 
 * 将横线分隔式的字符转换成驼峰式字符
 * @param {any} data 
 * @returns 
 */
function camelCase(data) {
	if(!data) return null;
	const REGEXP_KEBAB_CASE = /[\:\-]+(.)/g;
	return data.replace(REGEXP_KEBAB_CASE, function(match, $1, offset){
		return offset ? $1.toUpperCase() : $1;
	})
}

export function hasClass(el, cls){
	return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
export function addClass(el, cls){
	if(!hasClass(el, cls)) el.className += ' ' + cls;
}

export function getOneStyle(element, cssParam) {
	if(!element || !cssParam) return null;	
	element = typeof element == 'string' ? document.querySelector(element) : element;
	cssParam = camelCase(cssParam);
	if(cssParam == 'flot') {
		cssParam = 'cssFloat';
	}
	const allStyle = document.defaultView.getComputedStyle(element, null);
	return element.style[cssParam] || allStyle ? allStyle[cssParam] : null;
}
export function removeClass(el, cls){
	if(hasClass(el, cls)){
		let reg = new RegExp('(//s|^)' + cls + '(//s|$)');
		el.className = el.className.replace(reg, ' ');
	}
}