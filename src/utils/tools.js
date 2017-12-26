/*
* @Author: liye
* @Date:   2017-12-26 20:03:40
* @Last Modified by:   liye
* @Last Modified time: 2017-12-26 20:06:45
*/

export function insideOf(value, list) {
	for(let i = 0; i < list.length; i++){
		if(value == list[i]) return true;
	}
	return false;
}