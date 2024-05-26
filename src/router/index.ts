import { createRouter, createWebHistory } from "vue-router"
import AppLayout from "@/layout/AppLayout.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/root",
			name: "root",
			component: AppLayout,
			redirect: "/",
			meta: {
				title: "Froggy App",
			},
			children: [
				{
					path: "/",
					name: "home",
					component: import("../views/AboutView.vue"),
					meta: {
						title: "Home",
					},
				},
				{
					path: "/about",
					name: "about",
					component: import("../views/AboutView.vue"),
					meta: {
						title: "About",
					},
				},
			],
		},
	],
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title?.toString() + " | Froggy App" || "Froggy App"
	next()
})

export default router
