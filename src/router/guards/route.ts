import type { Router } from "vue-router"
// import { useUserStore } from "@/stores/modules/user"

export function createRouteGuard(router: Router) {
	router.beforeEach(async (to, from, next) => {
		// //無token強制進入登入頁
		// const userStore = useUserStore()
		// if (!userStore.hasToken) return next({ name: "login", replace: true })

		// //有token就不進入登入頁
		// const isLoginPage = to.name === "login"
		// if (isLoginPage) return next(from.fullPath)

		next()
	})

	router.onError((error) => {
		console.error("路由錯誤", error.message)
	})
}
