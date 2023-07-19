<script lang="ts" setup>
definePageMeta({
    middleware: ["guest"],
});

const { $axios } = useNuxtApp();

const email = ref("");
const forgotPasswordData: ForgotPasswordData = reactive({ email });


const submitForm = async () => {
    try {
        if (!email.value) {
            useEvent("showToast", "Invalid email address");
            return;
        }

        const response: APIResponse = await $axios.post("forgot-password", forgotPasswordData);
        if (!response.success) {
            return useEvent("showToast", response.message);
        }

        useEvent("showToast", "Email sent successfully");
    } catch (error: any) {
        useEvent("showToast", error.message);
    }
};
</script>

<template>
    <div class="auth__form w-100 d-flex flex-column align-items-center">
        <IconLogo />

        <form class="d-flex flex-column" @submit.prevent="submitForm">
            <BaseText v-model="email" label="Email" for="email" type="email" placeholder="johndoe@gmail.com" />

            <button type="submit" class="btn w-100 text-center">
                Request Password Reset
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
            border-radius: 0.8rem;
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

    .otp-input {
        gap: 4rem;

        h3 {
            @include font(2rem, 2.4rem);
            color: $col-black;
        }

        .fields {
            gap: 3rem;

            input {
                padding: 0.5rem;
                border: 1px solid $col-bluePurple;
                border-radius: 1.2rem;
                width: 4.9rem;
                height: 4.9rem;
                text-align: center;
                font-size: 3rem;
                transition: all 0.2s ease-in-out;

                &:focus {
                    outline: none;
                    border: 2px solid $col-bluePurple;
                }
            }
        }

        p {
            @include font(1.6rem, 1.9rem);
            color: $col-black;

            button {
                color: $col-bluePurple;
                text-decoration: underline;
            }
        }
    }
}
</style>
