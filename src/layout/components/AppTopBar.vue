<template>
	<div class="card shadow-lg">
		<Menubar class="px-3">
			<template #start> <h1 class="font-bold">Home</h1> </template>
			<template #end>
				<div class="flex align-items-center gap-4">
					<div class="flex align-items-center gap-2">
						<BadgeIcon icon="pi-bell" tag-color="danger" tag-text="3" />
						<BadgeIcon icon="pi-envelope" tag-color="success" tag-text="5+" />
					</div>
					<Button
						class="relative overflow-hidden flex align-items-center p-1 pl-2 text-color hover:surface-200 rounded-lg">
						<Avatar
							image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
							class="mr-2"
							shape="circle" />
						<span class="inline-flex flex-column pl-2 items-end">
							<span class="text-sm">Admin</span>
							<span class="font-bold">Amy Elsner</span>
						</span>
					</Button>
				</div>
			</template>
		</Menubar>
	</div>
</template>

<script setup>
import { ref } from "vue"
import BadgeIcon from "@/components/BadgeIcon.vue"

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
