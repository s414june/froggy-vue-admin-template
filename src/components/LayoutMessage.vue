<template>
	<SlideFadeDropdown dropdown-class="mt-2">
		<template #button>
			<BadgeIcon icon="pi pi-envelope" tag-color="success" tag-text="5+" />
		</template>
		<template #dropdown>
			<Listbox
				v-model="selectedAction"
				:options="actions"
				optionLabel="label"
				class="w-[13rem]"
				listStyle="max-height:250px">
				<template #option="slotProps">
					<div class="flex align-items-center px-2 py-1">
						<i class="mr-2" :class="slotProps.option.icon"></i>
						<div>{{ slotProps.option.label }}</div>
					</div>
				</template>
			</Listbox>
		</template>
	</SlideFadeDropdown>
</template>
<script setup>
import { ref } from "vue"
import SlideFadeDropdown from "@/components/SlideFadeDropdown.vue"

const selectedAction = ref(null)
const actions = ref([
	{
		label: "設定",
		icon: "pi pi-cog",
	},
	{
		label: "登出",
		icon: "pi pi-sign-out",
	},
])
</script>
