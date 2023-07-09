<script lang="ts" setup>
interface Props {
    mode: string;
}

defineProps<Props>();

const saveChanges = () => {
    const website = document.getElementById("website") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    if (website.value === "" || email.value === "" || password.value === "") {
        useEvent("showToast", "Please fill in all fields!");
    }
};
</script>

<template>
    <div class="add__password d-flex flex-column">
        <h1 class="add__password-header weight-600 text-center">{{ mode === "edit" ? "Edit Password" : "Add a New Password"
        }}</h1>

        <form class="add__password-form w-100 d-flex flex-column" @submit.prevent="saveChanges">
            <BaseText for="website" label="Website" type="text" placeholder="https://example.com" />
            <BaseText for="email" label="Email" type="email" placeholder="johndoe@gmail.com" />
            <BaseText for="password" label="Password" type="password" placeholder="********************" />
            <BaseSelect for="category" label="Category" :values="['Social', 'Work', 'Finance', 'Other']" />

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
