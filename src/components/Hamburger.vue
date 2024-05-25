<template>
	<div class="flex justify-end menu-btn-outside">
		<div class="menu-btn">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>
<style lang="scss">
:root {
	--ham-width: 22px;
	--ham-height: 2.5px;
	--ham-margin: calc(var(--ham-height) * 1.8);
	--ham-radius: calc(var(--ham-height) / 2);
	--ham-y: calc((var(--ham-height) * 2 + var(--ham-margin) * 2) / 2);
	--ham-y-revert: calc(var(--ham-y) * (-1));
}
.menu-btn div {
	background: #000;
	width: var(--ham-width);
	height: var(--ham-height);
	margin: var(--ham-margin) 0;
	border-radius: var(--ham-radius);
	transition: 0.2s;
}
.menu-btn-outside:hover {
	.menu-btn {
		div {
			transform: scale(1.1);
			transition: 0.3s;
		}
		div:nth-child(1) {
			transform: translate(0, var(--ham-y)) scale(1.1) rotate(-45deg);
		}
		div:nth-child(2) {
			transform: scale(1.1);
			opacity: 0;
		}
		div:nth-child(3) {
			transform: translate(0, var(--ham-y-revert)) scale(1.1) rotate(45deg);
		}
	}
}
</style>
