<template>
	<Menu :model="items" class="w-full md:w-15rem h-full shadow-lg">
		<template #start>
			<span class="inline-flex align-items-center gap-1 px-2 py-3">
				<img src="@/assets/logo.png" class="w-2 mr-1" />
				<span class="font-medium text-xl font-semibold text-primary"
					>Froggy<span class="text-bluegray-900">App</span></span
				>
			</span>
		</template>
		<template #submenuheader="{ item }">
			<span class="text-primary font-bold">{{ item.label }}</span>
		</template>
		<template #item="{ item, props }">
			<a v-ripple class="flex align-items-center" v-bind="props.action">
				<span :class="item.icon" />
				<span class="ml-2">{{ item.label }}</span>
				<Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
				<span
					v-if="item.shortcut"
					class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
					>{{ item.shortcut }}</span
				>
			</a>
		</template>
	</Menu>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"
// import { useCountHeight } from "@/composables/countHeight.ts"

onBeforeMount(() => {
	// useCountHeight()
})

const items = ref([
	{
		separator: true,
	},
	{
		label: "Documents",
		items: [
			{
				label: "New",
				icon: "pi pi-plus",
				shortcut: "⌘+N",
			},
			{
				label: "Search",
				icon: "pi pi-search",
				shortcut: "⌘+S",
			},
		],
	},
	{
		label: "Profile",
		items: [
			{
				label: "Settings",
				icon: "pi pi-cog",
				shortcut: "⌘+O",
			},
			{
				label: "Messages",
				icon: "pi pi-inbox",
				badge: 2,
			},
			{
				label: "Logout",
				icon: "pi pi-sign-out",
				shortcut: "⌘+Q",
			},
		],
	},
	{
		separator: true,
	},
])
</script>
