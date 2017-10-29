export default {
    name: "Cell",
    functional: true,
    props: {
        index: Number,
        row: Object,
        column: Object,
        render: Function
    },
    render: (h, context) => {
        const prarms = {
            row: context.props.row,
            column: context.props.column,
            index: context.props.index
        };
        return context.props.render(h, prarms);
    }
}