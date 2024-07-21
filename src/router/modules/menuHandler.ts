import menuList from "@/assets/json/menuList.json"

export const getMenuListItems = async () => {
	try {
		const dynamicMenuList = await menuList.routes
		const menuListItems = []
		getMenuListItem(dynamicMenuList, menuListItems)
		return menuListItems
	} catch (error) {
		return Promise.reject(error)
	}
}

function getMenuListItem(dynamicMenuList, menuListItems) {
	dynamicMenuList.forEach((menu) => {
		const label = menu.meta.title
		const icon = menu.meta.icon
		const path = menu.path
		let items = []
		if (menu.children) {
			getMenuListItem(menu.children, items)
		}
		menuListItems.push({ label, icon, path, items })
	})
}
