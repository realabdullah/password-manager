<script lang="ts" setup>

</script>

<template>
    <header class="d-flex align-items-center justify-content-space-between">
        <IconLogo class="logo" />

        <button class="account d-flex align-items-center">
            <img src="/assets/images/avatar.png" alt="avatar">
            <span class="weight-400">Johndoe@gmail.com</span>
            <IconCaret direction="down" />
        </button>
    </header>
</template>

<style scoped lang="scss">
header {
    padding: 2.2rem 6rem;
    background-color: $col-white;
    border-bottom: 0.1rem solid $col-grey;

    @media screen and (max-width: 768px) {
        padding: 2.2rem 2.4rem;
    }

    @media screen and (min-width: 769px) and (max-width: 950px) {
        padding: 2.2rem 3.4rem;
    }

    .logo {
        width: 22.8rem;

        @media screen and (max-width: 423px) {
            width: 10rem;
        }

        @media screen and (min-width: 423px) and (max-width: 485px) {
            width: 18rem;
        }
    }

    .account {
        gap: 0.8rem;

        img {
            width: 2.8rem;
            height: 2.8rem;
            border-radius: 50%;
        }

        span {
            @include font(1.2rem, 2rem);
            color: $col-darkGrey;
        }
    }
}
</style>
