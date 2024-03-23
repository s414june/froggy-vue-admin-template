<script lang="ts" setup>
import { ref } from "vue"
import Button from "primevue/button"
import Checkbox from "primevue/checkbox"
import InputText from "primevue/inputtext"
import Timeline from "primevue/timeline"

const checked = ref(false)
const value = ref("111")
const events = ref([
	{
		status: "Ordered",
		date: "15/10/2020 10:30",
		icon: "pi pi-shopping-cart",
		color: "#9C27B0"
	},
	{
		status: "Processing",
		date: "15/10/2020 14:00",
		icon: "pi pi-cog",
		color: "#673AB7"
	},
	{
		status: "Shipped",
		date: "15/10/2020 16:15",
		icon: "pi pi-shopping-cart",
		color: "#FF9800"
	},
	{
		status: "Delivered",
		date: "16/10/2020 10:00",
		icon: "pi pi-check",
		color: "#607D8B"
	}
])

const categories = ref([
	{ name: "Accounting", key: "A" },
	{ name: "Marketing", key: "M" },
	{ name: "Production", key: "P" },
	{ name: "Research", key: "R" }
])
const selectedCategories = ref(["Marketing"])
</script>

<template>
	<Button>save</Button>
	<div>
		<Checkbox v-model="checked" :binary="true" />
	</div>
	<InputText type="text" v-model="value" />
	<div class="card">
		<Timeline :value="events">
			<template #content="slotProps">
				{{ slotProps.item.status }}
			</template>
		</Timeline>
	</div>
	<div class="card flex justify-center">
		<div class="flex flex-col gap-3">
			<div
				v-for="category of categories"
				:key="category.key"
			>
				<Checkbox
					v-model="selectedCategories"
					:inputId="category.key"
					name="category"
					:value="category.name"
				/>
				<label :for="category.key">{{ category.name }}</label>
			</div>
		</div>
	</div>
</template>
