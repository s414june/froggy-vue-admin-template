<template>
	<nav class="card shadow-lg" id="TopBar">
		<Menubar class="px-3">
			<template #start>
				<div class="ml-2">
					<h1 class="font-bold">Home</h1>
				</div>
			</template>
			<template #end>
				<div class="flex items-center gap-4">
					<div class="relative h-[50px]">
						<div class="flex items-center gap-2 h-full">
							<LayoutNotion tag-color="danger" tag-text="3" />
							<LayoutMessage tag-color="success" tag-text="5+" />
						</div>
					</div>
					<div class="relative">
						<LayoutUser></LayoutUser>
					</div>
				</div>
			</template>
		</Menubar>
	</nav>
</template>

<script setup>
import { ref } from "vue"
import BadgeIcon from "@/components/BadgeIcon.vue"
import LayoutNotion from "@/components/LayoutNotion.vue"
import LayoutMessage from "@/components/LayoutMessage.vue"
import LayoutUser from "@/components/LayoutUser.vue"

const items = ref([
	{
		label: "Home",
		icon: "pi pi-home",
	},
	{
		label: "Features",
		icon: "pi pi-star",
	},
	{
		label: "Projects",
		icon: "pi pi-search",
		items: [
			{
				label: "Core",
				icon: "pi pi-bolt",
				shortcut: "⌘+S",
			},
			{
				label: "Blocks",
				icon: "pi pi-server",
				shortcut: "⌘+B",
			},
			{
				label: "UI Kit",
				icon: "pi pi-pencil",
				shortcut: "⌘+U",
			},
			{
				separator: true,
			},
			{
				label: "Templates",
				icon: "pi pi-palette",
				items: [
					{
						label: "Apollo",
						icon: "pi pi-palette",
						badge: 2,
					},
					{
						label: "Ultima",
						icon: "pi pi-palette",
						badge: 3,
					},
				],
			},
		],
	},
	{
		label: "Contact",
		icon: "pi pi-envelope",
		badge: 3,
	},
])
</script>
