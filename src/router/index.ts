import { createRouter, createWebHistory } from "vue-router"
import HomeIndex from "../views/HomeIndex.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeIndex
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
