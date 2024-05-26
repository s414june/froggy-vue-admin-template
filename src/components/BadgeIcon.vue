<template>
	<Button
		class="relative overflow-visible hover:surface-200 p-[10px] rounded-full z-1">
		<span class="text-lg" :class="[props.icon]"> </span>
		<div class="absolute">
			<Badge
				:value="props.tagText"
				:severity="props.tagColor"
				class="text-[10px] h-4 leading-4 translate-x-1 -translate-y-3 min-w-4"></Badge>
		</div>
	</Button>
</template>
<script setup>
const props = defineProps(["icon", "tag-color", "tag-text"])
</script>
