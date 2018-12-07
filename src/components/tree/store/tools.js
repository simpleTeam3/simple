export const getPropertyFromData = function(node, attr){
    const dataAttr = node.store.dataAttr;
    const data = node.data || {};
    const config = dataAttr[attr];                     //子的key,用户可自定义的
    
    if(typeof config === "string"){
        return data[config];
    }else if(typeof config === 'undefined'){
        const dataProp = data[attr];                //这里的attr实际固定是'children'
        return dataProp === undefined ? '' : dataProp;
    }
}