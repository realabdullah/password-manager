<script lang="ts" setup>
definePageMeta({
    middleware: ["guest"],
    title: "Reset Password",
});

const { $axios } = useNuxtApp();
const route = useRoute();
const token = route.path.split("/")[2];

const password = ref("");
const resetPasswordData: ForgotPasswordData = reactive({ password, token });

const verifyToken = async () => {
    try {
        const response: APIResponse = await $axios.post("verify-reset-password-token", { token });
        if (!response.success) {
            useEvent("showToast", "Password reset link has expired");
            return navigateTo("/404")
        }
    } catch (error: any) {
        useEvent("showToast", error.message);
    }
};


const submitForm = async () => {
    try {
        if (!password.value) {
            useEvent("showToast", "Invalid password");
            return;
        }

        const response: APIResponse = await $axios.post("reset-password", resetPasswordData);
        if (!response.success) {
            return useEvent("showToast", response.message);
        }

        useEvent("showToast", "Password reset successfully");
    } catch (error: any) {
        useEvent("showToast", error.message);
    }
};

await verifyToken();
</script>

<template>
    <div class="auth__form w-100 d-flex flex-column align-items-center">
        <IconLogo />

        <form class="d-flex flex-column" @submit.prevent="submitForm">
            <BaseText v-model="password" label="Password" for="password" type="password"
                placeholder="********************" />

            <button type="submit" class="btn w-100 text-center">
                Reset Password
                <IconArrow direction="right" />

            </button>
        </form>
        <nuxt-link to="/">Back to Login Page</nuxt-link>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.auth__form {
    max-width: 60rem;
    margin: 0 auto;
    padding: 4rem 2rem;

    form {
        gap: 1.2rem;
        margin-top: 4rem;
        width: 100%;

        .btn {
            margin-top: 2rem;
            background-color: $col-bluePurple;
            color: $col-white;
            border-radius: .8rem;
            padding: 1.5rem;
            transition: all 0.2s;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    a {
        margin-top: 1rem;
        @include font(1.6rem, 1.8rem);
        color: $col-bluePurple;
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
