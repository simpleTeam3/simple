<style>
    .icon-item {
        display: block;
        cursor: pointer;
    }
    .icon-item label {
        display: block;
    }
    .v-copy-link{width:0; height:0;position: absolute;opacity: 0;}
</style>

<template>
	<div>
		<div class="demo-list">
			<div class="title">icon组件实例</div>
			<vut-icon type="friendfamous" size=30 color="blue"></vut-icon>
            <vut-icon type="roundcheck" size=30 color="#ee0606"></vut-icon>
            <vut-icon type="collection_fill" size=30 color="#e83c1f"></vut-icon>

            <vut-icon type="roundclosefill" size=30 color="#ed3f14"></vut-icon>
            <vut-icon type="roundcheckfill" size=30 color="#19be6b"></vut-icon>
            <vut-icon type="infofill" size=30 color="#0a8dea"></vut-icon>
            <vut-icon type="warning-fill" size=30 color="#f89807"></vut-icon>
		</div>
		<!-- API -->
        <div class="demo-list">
			<div class="title">API</div>
			<h3 class="api-label">Icon props</h3>
			<vut-table :columns="props" :data="propsData" border></vut-table>
		</div>

        <div class="demo-list">
            <div class="title">所有图标</div>
            <vut-table :columns="iconColumns" :data="allIconData" border></vut-table>
            <textarea type="text" id="v-copy-link-id" class="v-copy-link" v-model="copyContent"></textarea>
        </div>
	</div>
</template>
<script>
    import {APIprops} from '../common/common'
    import {propsData, allIconData} from '../data/API/components/icon'

	export default {
		data(){
            const vm = this;
			return {
                copyContent: "",
                props: APIprops,
			    propsData: propsData,
                iconColumns: [
                    {
                        prop: "icon1",
                        label: "图标",
                        align: "center",
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
                                },
                                on: {
                                    click: function() {
                                        vm.copyContent = `<vut-icon type="${params.row.icon1}"></vut-icon>`;
                                        setTimeout(()=>{
                                            vm.copyFn("v-copy-link-id");
                                        })
                                    }
                                }
                            }, [
                                h("vut-icon", {
                                    props: {
                                        type:params.row.icon1,
                                        size: vm.iconSize
                                    }
                                }),
                                h("label", {
                                    domProps: {
                                        innerHTML: params.row.icon1
                                    }
                                })
                            ])
                        }
                    },
                    {
                        prop: "icon2",
                        label: "图标",
                        align: "center",
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
                                },
                                on: {
                                    click: function() {
                                        vm.copyContent = `<vut-icon type="${params.row.icon2}"></vut-icon>`;
                                        setTimeout(()=>{
                                            vm.copyFn("v-copy-link-id");
                                        })
                                    }
                                }
                            }, [
                                h("vut-icon", {
                                    props: {
                                        type:params.row.icon2,
                                        size: vm.iconSize
                                    }
                                }),
                                h("label", {
                                    domProps: {
                                        innerHTML: params.row.icon2
                                    }
                                })
                            ])
                        }
                    },
                    {
                        prop: "icon3",
                        label: "图标",
                        align: "center",
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
                                },
                                on: {
                                    click: function() {
                                        vm.copyContent = `<vut-icon type="${params.row.icon3}"></vut-icon>`;
                                        setTimeout(()=>{
                                            vm.copyFn("v-copy-link-id");
                                        })
                                    }
                                }
                            }, [
                                h("vut-icon", {
                                    props: {
                                        type:params.row.icon3,
                                        size: vm.iconSize
                                    }
                                }),
                                h("label", {
                                    domProps: {
                                        innerHTML: params.row.icon3
                                    }
                                })
                            ])
                        }
                    },
                    {
                        prop: "icon4",
                        label: "图标",
                        align: "center",
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
                                },
                                on: {
                                    click: function() {
                                        vm.copyContent = `<vut-icon type="${params.row.icon4}"></vut-icon>`;
                                        setTimeout(()=>{
                                            vm.copyFn("v-copy-link-id");
                                        })
                                    }
                                }
                            }, [
                                h("vut-icon", {
                                    props: {
                                        type:params.row.icon4,
                                        size: vm.iconSize
                                    }
                                }),
                                h("label", {
                                    domProps: {
                                        innerHTML: params.row.icon4
                                    }
                                })
                            ])
                        }
                    },
                    {
                        prop: "icon5",
                        label: "图标",
                        align: "center",
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
                                },
                                on: {
                                    click: function() {
                                        vm.copyContent = `<vut-icon type="${params.row.icon5}"></vut-icon>`;
                                        setTimeout(()=>{
                                            vm.copyFn("v-copy-link-id");
                                        })
                                    }
                                }
                            }, [
                                h("vut-icon", {
                                    props: {
                                        type:params.row.icon5,
                                        size: vm.iconSize
                                    }
                                }),
                                h("label", {
                                    domProps: {
                                        innerHTML: params.row.icon5
                                    }
                                })
                            ])
                        }
                    }
                ],
                allIconData,
                iconSize: 25
			}
		},
		methods: {
			copyFn(id) {
                document.getElementById(id).select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                // vm.$Message.success("已复制链接，可粘贴");
                alert(`代码已复制到粘贴板，可粘贴`);
            }
		}
	}
</script>
