import { getPropertyFromData, markNodeData } from "./tools";


let nodeIdSeed = 0;                                 //可用作渲染key

export default class Node {
    constructor(options){

        this.id = nodeIdSeed++;
        this.data = null;
        this.parent = null;
        this.expanded = true;

        for(let opt in options){
            options.hasOwnProperty(opt) && (this[opt] = options[opt])
        }


        //
        this.level = 0;

        if(this.parent) this.level = this.parent.level + 1;

        if(this.data){
            this.setData(this.data);
        }
    }

    //设置一个Node节点的数据
    setData(data){
        //设置Node 的id
        if(!Array.isArray(data)) {
            markNodeData(this, data);
        }
        
        this.data = data;
        this.childNodes = [];

        let children;
        //开头
        if(this.level === 0 && this.data instanceof Array){
            children = this.data;
        }else{
            children = getPropertyFromData(this, 'children') || []
        }
        for(let child of children){
            this.insertChildNode({data: child})
        }

    }

    //插入子Node
    insertChildNode(child){
        if(!child) throw new Error('insertChildNode error: is required');
        if(!(child instanceof Node)){
            const children = this.getChildren(true);
            if(children.indexOf(child.data) === -1){

            }
            Object.assign(child, {
                parent: this,
                store: this.store
            })
            child = new Node(child);

            child.level = this.level + 1;

            this.childNodes.push(child);
        }
    }

    //组件使用时可以通过dataAttr传子节点的键值，所以多了这一步
    getChildren(){
        if(this.level === 0) return this.data;
        const data = this.data;

        const dataAttr = this.store.dataAttr;
        let children = 'children';
        if(dataAttr){
            //可自己设置子节点的key
            children = dataAttr.children || 'children'
        }

        if(data[children] === undefined){
            data[children] = null;
        }

        return data[children];
    }

    //收起子节点
    collapse(){
        this.expanded = false;
    }

    //展开子节点
    expand(){
        this.expanded = true;
    }
}