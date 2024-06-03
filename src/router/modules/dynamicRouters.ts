import type { Router } from "vue-router"
import { RouteRecordRaw } from "vue-router"
import menuList from "@/assets/json/menuList.json"

const modules = import.meta.glob("@/views/**/*.vue")

export const createDynamicRouters = async (router: Router) => {
	try {
		const dynamicMenuList = await menuList.routes
		const flatMenuList = getFlatMenuList(dynamicMenuList)

		flatMenuList.forEach((item) => {
			item.children && delete item.children
			console.log(item.component)
			if (item.component && typeof item.component == "string") {
				item.component = modules["/src/views" + item.component + ".vue"]
			}
			if (!item.meta.parent) {
				router.addRoute(item as RouteRecordRaw)
			} else {
				router.addRoute(item.meta.parent, item as RouteRecordRaw)
			}
		})
	} catch (error) {
		return Promise.reject(error)
	}
}

function getFlatMenuList(menuList) {
	let newMenuList: Array<RouteRecordRaw> = JSON.parse(JSON.stringify(menuList))
	return newMenuList.flatMap((item) => [
		item,
		...(item.children ? getFlatMenuList(item.children) : []),
	])
}
