<script lang="ts" setup>

</script>

<template>
    <div class="auth__form w-100 d-flex flex-column align-items-center">
        <IconLogo />

        <form class="d-flex flex-column">
            <BaseText label="Email" for="email" type="email" placeholder="johndoe@gmail.com" />

            <button type="submit" class="btn w-100 text-center">
                Request OTP
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
