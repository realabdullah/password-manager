<script lang="ts" setup>

</script>

<template>
    <div class="main">
        <BaseHeader />
        <div class="container">
            <BaseSideBar />

            <div class="container__content">
                <PageAction />
                <PasswordCard />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main {
    height: 100vh;
    overflow: hidden;

    .container {
        display: grid;
        grid-template-columns: 37.5rem 1fr;
        height: 100%;
        overflow: hidden;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        @media screen and (min-width: 769px) and (max-width: 950px) {
            grid-template-columns: 25rem 1fr;
        }

        &__content {
            max-width: 150rem;
            padding: 3.4rem 6rem;
            overflow-y: auto;

            @media screen and (max-width: 768px) {
                padding: 2.4rem;
            }

            @media screen and (min-width: 769px) and (max-width: 950px) {
                padding: 3.4rem;
            }
        }
    }
}
</style>
