import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from "vue-router"
import { staticRouters, errorRouters } from "@/router/modules/staticRouters"
import { createDynamicRouters } from "@/router/modules/dynamicRouters"
import { createRouterGuard } from "./guards"

const mode = import.meta.env.VITE_ROUTER_MODE

const routerMode = {
	hash: () => createWebHashHistory(),
	web: () => createWebHistory(),
}

async function initRouter() {
	const router = createRouter({
		history: routerMode[mode](),
		routes: [...staticRouters, ...errorRouters],
		scrollBehavior: () => ({ left: 0, top: 0 }),
	})

	await createDynamicRouters(router)
	createRouterGuard(router)

	return router
}

export default initRouter
