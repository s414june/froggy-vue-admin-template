<script setup>
import AppTopBar from "@/layout/components/AppTopBar.vue"
import AppFooter from "@/layout/components/AppFooter.vue"
import AppSidebar from "@/layout/components/AppSidebar.vue"
</script>

<template>
	<div>
		<div class="flex h-screen w-full fixed">
			<div class="layout-sidebar z-5">
				<AppSidebar></AppSidebar>
			</div>
			<div class="w-full flex flex-col">
				<AppTopBar></AppTopBar>
				<div class="layout-main grow overflow-auto">
					<router-view></router-view>
					<AppFooter></AppFooter>
				</div>
			</div>
		</div>
	</div>
</template>
