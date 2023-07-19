import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
	const { $axios } = useNuxtApp();

	const user = ref<User | null>(null);
	const categories = ref<Category[]>([]);
	const passwords = ref<Password[]>([]);

	const categoryCount = (title: string) => {
		return passwords.value.filter(
			(password: Password) => password.category === title
		).length;
	};

	const fetchPasswordsAndCategories = async () => {
		await getAllPasswords();
		await getAllCategories();
	};

	const logIn = async (data: LoginData) => {
		const response: LoginResponse = await $axios.post("login", data);
		if (!response.success) {
			return response.message;
		}

		const { user: userObj, tokens } = response.data;
		const { access, refresh } = tokens;
		const { token, expires } = access;
		const { token: refreshToken, expires: refreshExpires } = refresh;

		useCookie("token_exp").value = expires;
		useCookie("refresh_token_exp").value = refreshExpires;

		useCookie("token").value = token;
		useCookie("refresh_token").value = refreshToken;

		user.value = userObj;

		return response.success;
	};

	const register = async (data: RegisterData) => {
		const response: LoginResponse = await $axios.post("register", data);
		if (!response.success) {
			return response.message;
		}

		const { user: userObj, tokens } = response.data;
		const { access, refresh } = tokens;
		const { token, expires } = access;
		const { token: refreshToken, expires: refreshExpires } = refresh;

		useCookie("token_exp").value = expires;
		useCookie("refresh_token_exp").value = refreshExpires;

		useCookie("token").value = token;
		useCookie("refresh_token").value = refreshToken;

		user.value = userObj;

		return response.success;
	};

	const logOut = async () => {
		const refreshToken = useCookie("refresh_token");
		await $axios.post("logout", {
			refreshToken: refreshToken.value,
		});
		useCookie("token_exp").value = "";
		useCookie("refresh_token_exp").value = "";

		useCookie("token").value = "";
		useCookie("refresh_token").value = "";

		user.value = null;

		navigateTo("/");
	};

	const addPassword = async (data: any) => {
		const response: APIResponse = await $axios.post("passwords", data);
		if (!response.success) return response.success;
		await fetchPasswordsAndCategories();
		return response.success;
	};

	const createCategory = async (name: string) => {
		const response: APIResponse = await $axios.post("categories", {
			name,
		});
		if (!response.success) return response.success;
		await fetchPasswordsAndCategories();
		return response.success;
	};

	const getAllCategories = async () => {
		const response: GetCategoriesResponse = await $axios.get("categories");
		if (!response.success) return;
		categories.value = response.data.data;
	};

	const getAllPasswords = async () => {
		const response: GetPasswordsResponse = await $axios.get("passwords");
		if (!response.success) return;
		passwords.value = response.data.data;
	};

	const deletePassword = async (id: string) => {
		const response: APIResponse = await $axios.delete("passwords", {
			data: {
				_ids: [id],
			},
		});
		if (!response.success) return response.success;
		await fetchPasswordsAndCategories();
		return response.success;
	};

	const updatePassword = async (_id: string, website: string) => {
		const response: APIResponse = await $axios.put("passwords", {
			_id,
			website,
		});
		if (!response.success) return response.success;
		await fetchPasswordsAndCategories();
		return response.success;
	};

	return {
		user,
		categories,
		passwords,
		logIn,
		logOut,
		categoryCount,
		fetchPasswordsAndCategories,
		addPassword,
		createCategory,
		getAllCategories,
		deletePassword,
		updatePassword,
	};
});
