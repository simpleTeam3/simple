import Node from './node';

export default class TreeStore{
    constructor(options){

        for(let opt in options){
            options.hasOwnProperty(opt) && (this[opt] = options[opt]);
        }

        this.rootNode = new Node({
            data: this.data,
            store: this
        })
    }
}