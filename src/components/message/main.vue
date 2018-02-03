<template>
    <transition :name="transitionName">
        <div :class="wrapClass" v-show="isShow">
            <div :class="conClass">
                <vut-icon :class="iconClass" :type="messageIconType" :color="messageIconColor"></vut-icon>
                <span :class="contentClass">{{ content }}</span>
                <vut-icon type="close" :class="closeClass" v-if="closable" @click.native="close"></vut-icon>
            </div>
        </div>
    </transition>
</template>
<script>
const prefixClass = "vut-message";
const iconType = {
    info: "infofill",
    success: "roundcheckfill",
    warning: "warning-fill",
    error: "roundclosefill"
};
const iconDiffColor = {
    info: "#909399",
    success: "#67c23a",
    warning: "#e6a23c",
    error: "#fa6a6a"
};
const iconColor = {
    info: "#2d8cf0",
    success: "#19be6b",
    warning: "#f90",
    error: "#ed3f14"
};

export default {
    props: {
        content: "",
        type: {
            type: String,
            default: "info"
        },
        duration: {
            type: Number,
            default: 3000
        },
        diffColor: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: false
        },
        onClose: Function
    },
    data() {
        return {
            isShow: false,
            timer: null
        }
    },
    computed: {
        wrapClass() {
            return [
                `${prefixClass}-wrap`
            ];
        },
        conClass() {
            return [
                `${prefixClass}-con`,
                {
                    [`${prefixClass}-${this.type}`]: !!this.type,
                    [`${prefixClass}-diff-color`]: !!this.diffColor,
                    [`${prefixClass}-closable`]: this.closable
                }
            ];
        },
        iconClass() {
            return `${prefixClass}-icon`;
        },
        contentClass() {
            return `${prefixClass}-content`;
        },
        closeClass() {
            return `${prefixClass}-close-icon`;
        },
        messageIconType() {
            return iconType[this.type];
        },
        messageIconColor() {
            if(this.diffColor) {
                return iconDiffColor[this.type];
            }
            return iconColor[this.type];
        },
        transitionName() {
            return `${prefixClass}-fade`;
        }
    },
    mounted() {
        this.autoDestory();
    },
    watch: {
        isShow(value) {
            if(!value) {
                document.addEventListener("transitionend", this.destoryElement);
            }
        }
    },
    methods: {
        autoDestory() {
            if(!isNaN(Number(this.duration))) {
                if(this.duration > 0) {
                    this.timer = setTimeout(() => {
                        if(this.isShow) {
                            this.close();
                        }
                    }, this.duration)
                }
            }
        },
        close(destory) {
            this.isShow = false;
            clearTimeout(this.timer);
            if(this.onClose && !destory) {
                this.onClose();
            }
        },
        destoryElement() {
            document.removeEventListener("transitionend", this.destoryElement);
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el);
        },
    }
}
</script>
