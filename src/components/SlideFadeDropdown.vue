<template>
	<div
		@click="open = !open"
		class="relative hide-on-click-outside h-full flex justify-center items-center"
		ref="elementRef">
		<slot name="button"></slot>
		<Transition name="slide-fade">
			<div v-if="open" class="absolute right-0 top-full">
				<div
					class="card flex justify-center border rounded-lg"
					:class="props.dropdownClass">
					<slot name="dropdown"></slot>
				</div>
			</div>
		</Transition>
	</div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue"
import { useClickOutsideStore } from "@/stores/clickOutside"

const props = defineProps(["dropdown-class"])
const clickOutsideStore = useClickOutsideStore()
const open = ref(false)
const elementRef = ref(null)

function checkClose(target) {
	if (!elementRef.value.classList.contains("hide-on-click-outside")) {
		open.value = false
		return
	}
	if (!elementRef.value.contains(target)) {
		open.value = false
		return
	}
}

watch(
	() => clickOutsideStore.triggerClickOutside,
	(target) => {
		checkClose(target)
	}
)
</script>
<style lang="scss">
.slide-fade-enter-active {
	transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-10px);
	opacity: 0;
}
</style>
