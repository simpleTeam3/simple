
export default class Node {
    constructor(options){
        this.data = null;
        this.parent = null;

        for(let opt in options){
            options.hasOwnProperty(opt) && (this[opt] = options[opt])
        }


        //
        this.level = 0;

        if(this.parent) this.level = this.parent.level + 1;
    }

    //设置一个Node节点的数据
    setData(data){
        this.data = data;
        this.childNodes = [];
    }

    //插入子Node
}