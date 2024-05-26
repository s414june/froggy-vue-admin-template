<script setup>
import RouterBreadcrumb from "@/components/RouterBreadcrumb.vue"
</script>

<template>
	<div class="py-5 px-6">
		<RouterBreadcrumb></RouterBreadcrumb>
		<slot></slot>
	</div>
</template>
