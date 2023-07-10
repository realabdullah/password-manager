export const useCategory = () => {
	const { addCategory, getCategories } = usePassword();
	const { categories } = storeToRefs(useStore());
	const title = ref("");
	const showAddCategory = ref(false);
	const showCategoryDropdown = ref(false);

	const openAddCategory = () => {
		showAddCategory.value = true;
		showCategoryDropdown.value = true;
	};

	const toggleCategoryDropdown = () => {
		if (!showCategoryDropdown.value) return (showCategoryDropdown.value = true);
		showAddCategory.value = false;
		showCategoryDropdown.value = false;
	};

	const addNewCategory = async () => {
		if (title.value.trim() === "") return;
		const payload: Category = {
			id: window.crypto.getRandomValues(new Uint32Array(1))[0].toString(),
			title: title.value,
		};
		await addCategory(payload);
		title.value = "";
		showAddCategory.value = false;
		categories.value = await getCategories();
	};

	return {
		title,
		showAddCategory,
		showCategoryDropdown,
		addNewCategory,
		openAddCategory,
		toggleCategoryDropdown,
	};
};
