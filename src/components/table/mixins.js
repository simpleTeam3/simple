export default {
    methods: {
        alignClass(column) {
            return [
                {
                    [`${column.className}`]: column.className,
                    [`${this.prefixClass}-column-${column.align}`]: column.align
                }
            ]
        },
        getCellWidth(column, index) {
            let width = "";
            if(column.width){
                width = `${column.width}px`;
            }else{
                //
            }
            return width;
        }
    }
}