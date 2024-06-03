import type { Router } from "vue-router"

export function createDocumentTitleGuard(router: Router) {
	router.afterEach((to) => {
		// 動態標題
		const title = import.meta.env.VITE_APP_TITLE
		document.title = to.meta.title ? `${to.meta.title} - ${title}` : title
	})
}
