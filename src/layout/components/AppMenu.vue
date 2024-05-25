<template>
	<Menu
		:model="items"
		class="w-[15rem] h-full shadow-lg menu ease-in-out duration-300 min-w-fit"
		:class="{
			'!w-[5rem]': menuHighlight && menuShrink,
			'!w-[4rem]': !menuHighlight && menuShrink,
		}">
		<template #start>
			<div
				class="flex items-center px-2 py-3 justify-between"
				:class="{ 'flex-col': menuShrink }">
				<div class="flex items-center gap-1">
					<img src="@/assets/logo.png" class="w-[30px] mr-1" />
					<span
						class="font-medium text-xl font-semibold text-primary"
						v-show="!menuShrink"
						>Froggy<span class="text-bluegray-900">App</span></span
					>
				</div>
				<div
					class="grow"
					:class="{ '-order-1 mb-2 w-full flex justify-center': menuShrink }"
					@mouseover="menuHighlight = true"
					@mouseleave="menuHighlight = false"
					@click="toggleMenu">
					<Hamburger></Hamburger>
				</div>
			</div>
		</template>
		<template #submenuheader="{ item }">
			<span class="text-primary font-bold" v-show="!menuShrink">{{
				item.label
			}}</span>
		</template>
		<template #item="{ item, props }">
			<a v-ripple class="flex align-items-center" v-bind="props.action">
				<span :class="item.icon" />
				<span class="ml-2" v-show="!menuShrink">{{ item.label }}</span>
			</a>
		</template>
	</Menu>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"
import Hamburger from "@/components/Hamburger.vue"
// import { useCountHeight } from "@/composables/countHeight.ts"

onBeforeMount(() => {
	// useCountHeight()
})

const menuHighlight = ref(false)
const menuShrink = ref(false)

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

function toggleMenu() {
	menuShrink.value = !menuShrink.value
}
</script>
<style lang="scss">
::v-deep {
	.menu-btn:hover .menu {
		width: 100px !important;
	}
}
</style>
