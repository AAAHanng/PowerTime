<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
    setup() {
        const items = [
            {
                icon: "el-icon-lx-home",
                index: "/dashboard",
                title: "系统首页",
            },
            {
                icon: "el-icon-lx-cascades",
                index: "/table",
                title: "客户分销",
            },
                        {
                icon: "el-icon-lx-sort",
                index: "7",
                title: "资讯配置",
                subs: [
                    {
                        index: "/permission",
                        title: "要闻",
                    },
                    {
                        index: "/permission",
                        title: "自选",
                    },
                    {
                        index: "/permission",
                        title: "7x24",
                    },
                    {
                        index: "/permission",
                        title: "港股",
                    },
                    {
                        index: "/permission",
                        title: "美股",
                    },
                    {
                        index: "/permission",
                        title: "基金",
                    },
                ],
            },
            {
                icon: "el-icon-lx-copy",
                index: "/tabs",
                title: "重要消息",
            },
            {
                icon: "el-icon-lx-calendar",
                index: "3",
                title: "广告设置",
                subs: [
                    {
                        index: "/form",
                        title: "首页",
                    },
                    {
                        index: "/upload",
                        title: "我的",
                    },
                    {
                        index: "4",
                        title: "行情",
                        subs: [
                            {
                                index: "/editor",
                                title: "行情列表",
                            },
                            {
                                index: "/editor",
                                title: "行情详情页",
                            },
                        ],
                    },
                ],
            },
            {
                icon: "el-icon-lx-emoji",
                index: "/icon",
                title: "系统公告",
            },
            {
                icon: "el-icon-pie-chart",
                index: "/charts",
                title: "推广费用",
            },
            {
                icon: "el-icon-lx-global",
                index: "/i18n",
                title: "全球开户",
            },
        ];

        const route = useRoute();

        const onRoutes = computed(() => {
            return route.path;
        });

        const store = useStore();
        const collapse = computed(() => store.state.collapse);

        return {
            items,
            onRoutes,
            collapse,
        };
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
