<template>
	<Breadcrumb :home="home" :model="items" style="background: none" class="p-0">
		<template #item="{ item }">
			<router-link :to="item.link">
				<div class="cursor-pointer flex items-center">
					<span :class="item.icon" class="mr-2"></span>
					<p class="mr-2">{{ item.name }}</p>
				</div>
			</router-link>
		</template>
	</Breadcrumb>
</template>
<script setup>
import { ref } from "vue"

const home = ref({ name: "首頁", icon: "pi pi-home", link: "#" })
const items = ref([
	{ name: "test", icon: "pi pi-sitemap", link: "#" },
	{ name: "test", icon: "pi pi-sitemap", link: "#" },
])
</script>
