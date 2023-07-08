<script lang="ts" setup>

</script>

<template>
    <header class="d-flex align-items-center justify-content-space-between">
        <div class="logo">
            <IconLogo />
        </div>

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

    .logo {
        width: 22.8rem;
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
