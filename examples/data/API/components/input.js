export const propsData = [
    {
        "props": "type", 
        "describe": "输入框类型", 
        "type": "String", 
        "option": "可选值为 text、password 或 textarea", 
        "default": "text"
    },
    {
        "props": "size", 
        "describe": "输入框尺寸", 
        "type": "String", 
        "option": "可选值为large、small、default或者不设置", 
        "default": "—"
    },
    {
        "props": "placeholder", 
        "describe": "占位文本", 
        "type": "String", 
        "option": "—", 
        "default": "—"
    },
    {
        "props": "disabled", 
        "describe": "设置输入框为禁用状态", 
        "type": "Boolean", 
        "option": "true、false", 
        "default": "false"
    },
    {
        "props": "readonly", 
        "describe": "设置输入框为只读状态", 
        "type": "Boolean", 
        "option": "true、false", 
        "default": "false"
    },
    {
        "props": "maxlength", 
        "describe": "设置最大输入长度", 
        "type": "Number", 
        "option": "—", 
        "default": "—"
    },
    {
        "props": "rows", 
        "describe": "文本域默认行数，仅在 textarea 类型下有效", 
        "type": "Number", 
        "option": "—", 
        "default": "2"
    },
    {
        "props": "hide-border", 
        "describe": "设置输入框的边框是否显示", 
        "type": "Boolean", 
        "option": "true、false", 
        "default": "false"
    },
    {
        "props": "input-style", 
        "describe": "设置输入框的的样式。有时候在某些情况下需要给输入框设置不一样的样式。值就是css的样式写法，比如：input-style='width:200px;'", 
        "type": "String", 
        "option": "—", 
        "default": "—"
    },
];

export const slotData = [
    {
        "slot": "prepend",
        "describe": "前置内容，仅在 text 类型下有效"
    },
    {
        "slot": "append",
        "describe": "后置内容，仅在 text 类型下有效"
    }
];

export const eventsData = [
    {
        "events": "on-enter", 
        "describe": "按下回车键时触发", 
        "returnValue": "event"
    },
    {
        "events": "on-focus", 
        "describe": "输入框聚焦时触发", 
        "returnValue": "event"
    },
    {
        "events": "on-blur", 
        "describe": "输入框失去焦点时触发", 
        "returnValue": "event"
    },
    {
        "events": "on-change", 
        "describe": "数据改变时触发", 
        "returnValue": "event"
    }
];
