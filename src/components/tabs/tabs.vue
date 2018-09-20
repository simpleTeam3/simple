<template>
    <div :class="prefix">
        <div :class="[prefix + '-bar']">
            <div :class="[prefix + '-nav-right']"><slot name="extra"></slot></div>
            <div
                :class="[prefix + '-nav-container']"
            >
                <div :class="[prefix + '-nav-wrap']">
                    <div :class="[prefix + '-nav-scroll']">
                        <div :class="prefix + '-nav'">
                            <div :class="inkClass"></div>
                            <div 
                                :class="navItemClass(nav)"
                                v-for="(nav, index) in navList" :key="index"
                                @click="changeNav(nav.name)"
                            >{{nav.label}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div><slot></slot></div>
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
            activeValue: this.value
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
        }
    },
    methods: {
        getTabs(){
            return this.$children.filter((item, index) => {
                return item.$options.name === "vutTabPanel";
            })
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
        changeNav(name){
            this.activeValue = name;
        }
    }
}
</script>
