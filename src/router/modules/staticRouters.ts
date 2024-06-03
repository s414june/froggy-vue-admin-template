import { RouteRecordRaw } from "vue-router"

/**
 * staticRouters (靜態路由)
 */
export const staticRouters: RouteRecordRaw[] = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "登入",
		},
	},
	{
		path: "/layout",
		name: "layout",
		component: () => import("@/layout/AppLayout.vue"),
		redirect: "/",
		children: [],
	},
]

/**
 * errorRouters (錯誤頁面)
 */
export const errorRouters = [
	{
		path: "/403",
		name: "403",
		component: () => import("@/views/error/pages/403.vue"),
		meta: {
			title: "403頁面",
		},
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/views/error/pages/404.vue"),
		meta: {
			title: "404頁面",
		},
	},
	{
		path: "/500",
		name: "500",
		component: () => import("@/views/error/pages/500.vue"),
		meta: {
			title: "500頁面",
		},
	},
	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/views/error/pages/404.vue"),
	},
]
