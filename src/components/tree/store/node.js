
export default class Node {
    constructor(options){
        this.level = 0;

        if(this.parent) this.level = this.parent.level + 1;
    }
}