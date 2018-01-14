export default {
    methods: {
        alignClass(column) {
            return [
                {
                    [`${column.className}`]: column.className,
                    [`${this.prefixClass}-column-${column.align}`]: column.align
                }
            ]
        }
    }
}