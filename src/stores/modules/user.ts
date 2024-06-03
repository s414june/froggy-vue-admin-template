import { defineStore } from "pinia"
import { UserState } from "@/stores/interface"

export const useUserStore = defineStore({
	id: "geeker-user",
	state: (): UserState => ({
		token: "",
		userInfo: { name: "Froggy" },
	}),
	getters: {},
	actions: {
		hasToken() {
			!this.token || this.token === "" ? false : true
		},
		setToken(token: string) {
			this.token = token
		},
		setUserInfo(userInfo: UserState["userInfo"]) {
			this.userInfo = userInfo
		},
	},
})
