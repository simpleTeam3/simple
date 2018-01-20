export const propsData = [
    {
        "props": "value",
        "describe": "当前值，可以使用 v-model 双向绑定数据",
        "type": "Number",
        "option": "——",
        "default": "0"
    },
    {
        "props": "max",
        "describe": "设置计数器允许的最大值",
        "type": "Number",
        "option": "——",
        "default": "Infinity"
    },
    {
        "props": "min",
        "describe": "	设置计数器允许的最小值",
        "type": "Number",
        "option": "——",
        "default": "-Infinity"
    },
    {
        "props": "step",
        "describe": "每次改变的步伐，可以是小数",
        "type": "Number",
        "option": "——",
        "default": "1"
    },
    {
        "props": "disabled",
        "describe": "设置禁用状态",
        "type": "Boolean",
        "option": "true、false",
        "default": "false"
    },
    {
        "props": "readonly",
        "describe": "是否设置为只读",
        "type": "Boolean",
        "option": "true、false",
        "default": "false"
    },
    {
        "props": "debounce",
        "describe": "输入时的去抖延迟，毫秒",
        "type": "Number",
        "option": "——",
        "default": "300"
    },
    {
        "props": "size",
        "describe": "计数器尺寸",
        "type": "String",
        "option": "可选值为large、small或者不设置",
        "default": "——"
    },
    {
        "props": "precision",
        "describe": "数值精度，允许保留的小数位数",
        "type": "Number",
        "option": "——",
        "default": "——"
    },
    {
        "props": "hide-controls",
        "describe": "是否隐藏控制按钮",
        "type": "Boolean",
        "option": "true、false",
        "default": "false"
    },
    {
        "props": "controls-position",
        "describe": "控制按钮位置",
        "type": "String",
        "option": "edge",
        "default": "——"
    }
];

export const eventsData = [
    {
        "events": "on-focus",
        "describe": "输入框聚焦时触发",
        "returnValue": "——"
    },
    {
        "events": "on-blur",
        "describe": "输入框失去焦点时触发",
        "returnValue": "——"
    },
    {
        "events": "on-change",
        "describe": "数据改变时触发",
        "returnValue": "当前值"
    }
];
