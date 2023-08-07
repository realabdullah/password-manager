<script setup lang="ts">
const { logOut } = useStore();

const props = defineProps({
    error: Object
})

const handleError = async () => {
    await logOut();
    clearError({ redirect: '/' });
}

const errorTitle = computed(() => props.error?.statusCode === 404 ? "404: The Lost Page Chronicles" : "500: The Gremlins Are At It Again");
const errorMessage = computed(() => props.error?.statusCode === 404 ? "Oops! Our cyber explorers are searching high and low for the missing page. While they work their magic, why not sharpen your virtual treasure-hunting skills?" : "Uh-oh, server gremlins are causing a ruckus. Our tech team is on the case, restoring order and digital harmony. Consider it a brief virtual intermission.");
</script>

<template>
    <div class="error w-100 d-flex align-items-center justify-content-center">
        <div class="error__container w-100 h-100 d-flex align-items-center justify-content-center">
            <div class="error__container__content w-100 h-100 d-flex align-items-center justify-content-center flex-column text-center">
                <h1 class="error__container__content__title weight-700">{{ errorTitle }}</h1>
                <p class="error__container__content__message weight-400">{{ errorMessage }}</p>
                <button class="error__container__content__button weight-700" @click="handleError">Go Home</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.error {
    height: 100vh;
    background-color: $col-grey;

    &__container {
        max-width: 70rem;
    }

    &__container__content {
        max-width: 50rem;
    }

    &__container__content__title {
        @include font(4rem, 6rem);
        color: $col-bluePurple;
        margin-bottom: 2rem;
    }

    &__container__content__message {
        @include font(1.6rem, 2.4rem);
        color: $col-bluePurple;
        margin-bottom: 2rem;
    }

    &__container__content__button {
        @include font(1.6rem, 2.4rem);
        color: $col-white;
        background-color: $col-bluePurple;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
    }
}
</style>