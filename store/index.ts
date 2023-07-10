import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
	const { getPasswords, getCategories } = usePassword();

	const categories = ref<Category[]>([]);
	const passwords = ref<Password[]>([]);

	const categoryCount = (title: string) => {
		return passwords.value.filter(
			(password: Password) => password.category === title
		).length;
	};

	const fetchPasswordsAndCategories = async () => {
		passwords.value = await getPasswords();
		categories.value = await getCategories();
	};

	return {
		categories,
		passwords,
		categoryCount,
		fetchPasswordsAndCategories,
	};
});
