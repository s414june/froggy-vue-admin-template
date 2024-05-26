import { defineStore } from "pinia"
import { ref, Ref } from "vue"

export const useClickOutsideStore = defineStore("clickOutside", () => {
	const triggerClickOutside = ref(null)

	const handleClickOutside = (event) => {
		triggerClickOutside.value = event.target
	}

	const initListener = () => {
		document.addEventListener("click", handleClickOutside)
	}

	const removeListener = () => {
		document.removeEventListener("click", handleClickOutside)
	}

	return {
		triggerClickOutside,
		initListener,
		removeListener,
	}
})
