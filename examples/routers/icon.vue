<style>
    .icon-item label {
        display: block;
    }
</style>

<template>
	<div>
		<div class="demo-list">
			<div class="title">icon组件实例</div>
			<vut-icon type="friendfamous" size=30 color="blue"></vut-icon>
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
                props: APIprops,
			    propsData: propsData,
                iconColumns: [
                    {
                        prop: "icon1",
                        label: "图标",
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
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
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
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
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
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
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
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
                        render: (h, params) => {
                            return h("span", {
                                class: {
                                    "icon-item": !!1
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
			
		}
	}
</script>
