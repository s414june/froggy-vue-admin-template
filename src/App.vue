<template>
	<RouterView />
</template>
<script setup>
import { onMounted, onUnmounted } from "vue"
import { useClickOutsideStore } from "@/stores/clickOutside"

const clickOutsideStore = useClickOutsideStore()

onMounted(() => {
	clickOutsideStore.initListener()
})

onUnmounted(() => {
	clickOutsideStore.removeListener()
})
</script>
