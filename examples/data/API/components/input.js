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
];

export const eventsData = [
    {
        "events": "on-enter", 
        "describe": "按下回车键时触发", 
        "returnValue": "无"
    },
    {
        "events": "on-focus", 
        "describe": "输入框聚焦时触发", 
        "returnValue": "无"
    },
    {
        "events": "on-blur", 
        "describe": "输入框失去焦点时触发", 
        "returnValue": "无"
    }
];
