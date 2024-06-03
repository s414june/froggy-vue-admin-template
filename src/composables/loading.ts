import NProgress from "@/nprogress"

export function useLoading() {
	const start = function () {
		NProgress.start()
	}
	const end = function () {
		NProgress.done()
	}

	return { start, end }
}
