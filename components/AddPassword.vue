<script lang="ts" setup>
interface Props {
    mode: string;
    passwordToEdit: Password;
}
const { categories } = storeToRefs(useStore());
const props = defineProps<Props>();
const emits = defineEmits(["close"]);

const name = ref("");
const email = ref("");
const password = ref("");
const website = ref("");
const category = ref("");

let addPassword: (password: Password) => void;
let editPassword: (password: Password) => void;

const saveChanges = () => {
    if (
        website.value === "" ||
        email.value === "" ||
        password.value === "" ||
        name.value === ""
    ) {
        useEvent("showToast", "Please fill in all fields!");
        return;
    }

    const passwordObj: Password = {
        id:
            props.mode === "edit"
                ? props.passwordToEdit.id
                : window.crypto.randomUUID(),
        name: name.value,
        website: website.value,
        email: email.value,
        password: password.value,
        category: category.value,
        image: "https://ui-avatars.com/api/?name=" + name.value,
        createdAt:
            props.mode === "edit"
                ? props.passwordToEdit.createdAt
                : new Date().toLocaleDateString(),
    };

    props.mode === "edit"
        ? editPassword(passwordObj)
        : addPassword(passwordObj);
    emits("close");
    useEvent(
        "showToast",
        `Password successfully ${props.mode === "edit" ? "edited" : "added"}!`
    );
};

if (props.mode === "edit") {
    name.value = props.passwordToEdit.name;
    website.value = props.passwordToEdit.website;
    email.value = props.passwordToEdit.email;
    password.value = props.passwordToEdit.password;
    category.value = props.passwordToEdit.category;
}

onMounted(() => {
    addPassword = usePassword().addPassword;
    editPassword = usePassword().editPassword;
});
</script>

<template>
    <div class="add__password d-flex flex-column">
        <h1 class="add__password-header weight-600 text-center">
            {{ mode === "edit" ? "Edit Password" : "Add a New Password" }}
        </h1>

        <form class="add__password-form w-100 d-flex flex-column" @submit.prevent="saveChanges">
            <BaseText v-model="name" for="name" label="Account Name" type="text" placeholder="Netflix" />
            <BaseText v-model="website" for="website" label="Website" type="text" placeholder="https://example.com" />
            <BaseText v-model="email" for="email" label="Email" type="email" placeholder="johndoe@gmail.com" />
            <BaseText v-model="password" for="password" label="Password" type="password"
                placeholder="********************" />
            <BaseSelect v-model="category" for="category" label="Category" :values="categories" />

            <button class="add__password-form-btn">
                {{ mode === "edit" ? "Edit Password" : "Add Password" }}
                <IconArrow direction="right" />
            </button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.add__password {
    &-header {
        @include font(1.5rem, 1.8rem);
        color: $col-black;
        margin-bottom: 3rem;
    }

    &-form {
        gap: 1.5rem;

        &-btn {
            @include font(1.4rem, 1.6rem);
            color: $col-white;
            background-color: $col-bluePurple;
            border-radius: 0.8rem;
            padding: 1.5rem;
            transition: all 0.2s;

            &:hover {
                background-color: darken($col-bluePurple, 10%);
            }
        }
    }
}
</style>
