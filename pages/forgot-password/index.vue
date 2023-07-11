<script lang="ts" setup>
definePageMeta({
    title: "forgot-password",
    middleware: ["guest"],
});

const { $axios } = useNuxtApp();

const email = ref("");
const otp = ref("");
const stage = ref("forget-password");

const otpInput = () => {
    const inputs = Array.from(document.querySelectorAll(".otp-input input") as NodeListOf<HTMLInputElement>);
    inputs.forEach((input, index) => {
        input.addEventListener("click", () => index && inputs[0].focus());

        input.addEventListener("keyup", (e) => {
            if (e.key === "Backspace" && index) inputs[index - 1].focus();
            else if (index < inputs.length - 1) inputs[index + 1].focus();

            if (index === inputs.length - 1) {
                otp.value = inputs.map((input) => input.value).join("");
            }
        });

    });
};

const forgotPassword = async () => {
    if (!email.value) return useEvent("showToast", "Email is required!");
    const response = await $axios.post("forgot-password", {
        email: email.value,
    });
    if (!response.data.success) throw new Error();
    useEvent("showToast", "OTP sent to your email!");
    stage.value = "otp-input";
};

const confirmToken = async () => {
    const response = await $axios.post("reset-password", {
        email: email.value,
        otp: otp.value,
    });
    if (!response.data.success) throw new Error();
    useEvent("showToast", "Password reset successful!");
    stage.value = "forget-password";
    email.value = "";
    otp.value = "";
};

const handleFormSubmission = async () => {
    try {
        stage.value === "forget-password" ? await forgotPassword() : await confirmToken();
    } catch (error) {
        useEvent("showToast", "An error occurred while processing your request!");
    }
};

onMounted(() => {
    otpInput();
});
</script>

<template>
    <div class="auth__form w-100 d-flex flex-column align-items-center">
        <IconLogo />

        <form class="d-flex flex-column" @submit.prevent="handleFormSubmission">
            <BaseText v-show="stage === 'forget-password'" v-model="email" label="Email" for="email" type="email"
                placeholder="johndoe@gmail.com" />

            <div v-show="stage === 'otp-input'" class="otp-input d-flex flex-column align-items-center">
                <h3 class="weight-400">Input one time password sent to your mail</h3>
                <div class="fields d-flex justify-content-center">
                    <input ref="otp" type="password" maxlength="1" />
                    <input ref="otp" type="password" maxlength="1" />
                    <input ref="otp" type="password" maxlength="1" />
                    <input ref="otp" type="password" maxlength="1" />
                </div>
                <p class="weight-400">Didn’t get the OTP? <button type="button" @click="forgotPassword">Request new
                        OTP</button></p>
            </div>

            <button type="submit" class="btn w-100 text-center">
                {{ stage === "forget-password" ? "Request OTP" : "Confirm OTP" }}
                <IconArrow direction="right" />
            </button>
        </form>

        <nuxt-link to="/">Back to Login Page</nuxt-link>
    </div>
</template>

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
