import type { Router } from "vue-router"
import { useLoading } from "@/composables/loading"

export function createProgressGuard(router: Router) {
	router.beforeEach(() => {
		useLoading().start()
	})
	router.afterEach(() => {
		useLoading().end()
	})
	router.onError(() => {
		useLoading().end()
	})
}
