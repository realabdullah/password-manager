<script lang="ts" setup>
const route = useRoute();
const pageText = computed(() => {
    if (route.name === "signup") {
        return "Create an account and start managing your passwords effectively.";
    } else {
        return "Easy to use Password Manager";
    }
});

const submitForm = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const cpassword = document.getElementById("cpassword") as HTMLInputElement;

    if (!email.value || !password.value) {
        useEvent("showToast", "Please fill in all fields");
        return;
    }

    if (route.name === "signup") {
        if (password.value !== cpassword.value) {
            useEvent("showToast", "Passwords do not match");
            return;
        }

        if (password.value.length < 8) {
            useEvent("showToast", "Password must be at least 8 characters long");
            return;
        }
    }

    navigateTo("/dashboard");
}
</script>

<template>
    <div class="auth__form w-100 d-flex flex-column align-items-center">
        <IconLogo />
        <span class="auth__form-desc w-100 weight-500 text-center">{{ pageText }}</span>

        <form class="d-flex flex-column" @submit.prevent="submitForm">
            <BaseText label="Email" for="email" type="email" placeholder="johndoe@gmail.com" />
            <BaseText label="Password" for="password" type="password" placeholder="********************" />
            <BaseText v-if="route.name === 'signup'" label="Confirm Password" for="cpassword" type="password"
                placeholder="********************" />

            <button type="submit" class="btn w-100 text-center">
                {{ route.name === "signup" ? "Sign Up" : "Login" }}
                <IconArrow direction="right" />
            </button>
        </form>
        <p v-if="route.name === 'signup'" class="forgot-password d-flex align-items-center justify-content-center">Already
            have an account?<nuxt-link to="/">Login</nuxt-link></p>
        <p v-else class="forgot-password d-flex align-items-center justify-content-center">Forgot
            Password? <nuxt-link to="/forgot-password">Request a new one</nuxt-link></p>

        <p v-if="route.name !== 'signup'" class="forgot-password d-flex align-items-center justify-content-center"
            style="margin-top: 5rem;">Don’t
            have an Account?<nuxt-link to="/signup">Sign Up</nuxt-link></p>
    </div>
</template>

<style lang="scss" scoped>
.auth__form {
    max-width: 60rem;
    margin: 0 auto;
    padding: 4rem 2rem;

    &-desc {
        max-width: 37rem;
        @include font(2rem, 2.4rem);
        color: $col-black;
        margin-top: 1rem;
    }

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

    .forgot-password {
        gap: 1rem;
        margin-top: 1rem;
        @include font(1.6rem, 1.8rem);
        color: $col-black;

        @media screen and (max-width: 400px) {
            gap: 0.5rem;
            @include font(1.2rem, 1.6rem);
            white-space: nowrap;
        }

        a {
            color: $col-bluePurple;
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>
