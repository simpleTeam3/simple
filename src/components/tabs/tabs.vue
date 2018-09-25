<template>
    <div :class="prefix">
        <div :class="[prefix + '-bar']">
            <div :class="[prefix + '-nav-right']"><slot name="extra"></slot></div>
            <div
                :class="[prefix + '-nav-container']"
            >
                <div :class="[prefix + '-nav-wrap']">
                    <div :class="[prefix + '-nav-scroll']">
                        <div :class="prefix + '-nav'" ref="nav">
                            <div :class="inkClass" :style="inkStyle"></div>
                            <div 
                                :class="navItemClass(nav)"
                                v-for="(nav, index) in navList" :key="index"
                                @click="changeNav(index)"
                            >{{nav.label}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="contentClass" :style="contentStyle"><slot></slot></div>
    </div>
</template>
<script>
export default {
    name: 'vutTabs',
    props: {
        value: [String, Number]
    },
    data() {
        return{
            prefix: this.global.prefix + 'tabs',
            navList: [],
            sliderWidth: 0,
            sliderOffset: 0,
            activeValue: this.value,
            animated: {
                type: Boolean,
                default: true
            }
        }
    },
    provide(){
        return {
            activeValue: this.activeValue,
            animated: this.animated
        }
    },
    computed: {
        inkClass(){
            return [
                this.prefix + '-nav-ink-bar',
            ]
        },
        navItemClass(){
            return function(item){
                return [
                    this.prefix + '-nav-item',
                    this.activeValue == item.name ? this.prefix + '-nav-item-active' : '' 
                ]
            }
        },
        contentClass(){
            return [
                this.prefix + '-content',
                {
                    [this.prefix + '-content-animated'] : this.animated
                }
            ]
        },
        inkStyle(){
            let style = {
                visibility: 'visible',
                width: this.sliderWidth + 'px',
            }

            if(this.animated){
                style.transform = `translateX(${this.sliderOffset}px)`;
            }else{
                style.left = this.sliderOffset + 'px';
            }
            return style;
        },
        contentStyle(){
            let style = {}
            const index = this.getActiveTabIndex(this.activeValue)
            if(index > -1){
                style.transform = `translateX(-${index}00%)`
            }
            return style;
        }
    },
    mounted(){
        this.updateBar()
    },
    watch: {
        activeValue(newValue, oldValue){
            this.updateBar();
        }
    },
    methods: {
        getTabs(){
            return this.$children.filter((item, index) => {
                return item.$options.name === "vutTabPanel";
            })
        },
        getActiveTabIndex(name){
            return this.navList.findIndex(nav => nav.name == name)
        },
        updateNav(){
            this.navList = [];
            let tabs = this.getTabs();
            for(let i = 0; i < tabs.length; i++){
                this.navList.push({
                    label: tabs[i].label,
                    name: tabs[i].name
                })
            }
        },
        updateBar() {
            this.$nextTick(() => {
                const index = this.getActiveTabIndex(this.activeValue);
                const navList = this.$refs.nav.querySelectorAll(`.${this.prefix}-nav-item`);
                const nav = navList[index];
                this.sliderWidth = nav ? parseFloat(nav.offsetWidth) : 0;

                if(index > 0){
                    let offsetSum = 0;
                    for(let i = 0; i < index; i++){
                        offsetSum += navList[i].offsetWidth + 15;
                    }
                    this.sliderOffset = parseFloat(offsetSum);
                }else{
                    this.sliderOffset = 0;
                }
            })
            
        },
        changeNav(index){
            this.activeValue = this.navList[index].name;
        }
    }
}
</script>
