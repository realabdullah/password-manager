<script lang="ts" setup>
const passwords = [
    { id: 1, brand: "Netflix", brandImage: "https://i.ibb.co/Sy0SDTL/netflix.png", email: "johndoe@gmail.com", password: "***********", website: "https://www.netflix.com" },
    { id: 2, brand: "HBO Max", brandImage: "https://i.ibb.co/W3w6rNs/hbo.png", email: "johndoe@gmail.com", password: "***********", website: "https://www.hbomax.com" },
    { id: 3, brand: "Hulu", brandImage: "https://i.ibb.co/G2FnqqC/hulu.png", email: "johndoe12@gmail.com", password: "***********", website: "https://www.hulu.com" },
    { id: 4, brand: "Amazon Prime Video", brandImage: "https://i.ibb.co/8P80nWR/prime.png", email: "johndoe16@gmail.com", password: "***********", website: "https://www.primevideo.com" },
    { id: 5, brand: "Paramount+", brandImage: "https://i.ibb.co/1X9Gtct/paramount.png", email: "johndoe161@gmail.com", password: "***********", website: "https://www.paramountplus.com" },
];

const selectedPassword = ref(0);
const accountOpened = ref(false);

const toggleAccount = (id: number) => {
    selectedPassword.value = (selectedPassword.value === id) ? 0 : id;
    accountOpened.value = (selectedPassword.value !== 0);
};
</script>

<template>
    <div class="passwords d-flex flex-column w-100">
        <div v-for="password in passwords" class="passwords__card">
            <div class="account d-flex align-items-center justify-content-space-between"
                @click="toggleAccount(password.id)">
                <div class="account__info d-flex align-items-center">
                    <img :src="password.brandImage" :alt="password.brand" />
                    <h4>{{ password.brand }} <span>- {{ password.email }}</span></h4>
                </div>
                <button class="account__toggle">
                    <IconCaret :direction="accountOpened && selectedPassword === password.id ? 'up' : 'down'" />
                </button>
            </div>

            <!-- account password info -->
            <div v-show="accountOpened && selectedPassword === password.id" class="passwords__card-body">
                <button class="edit d-flex align-items-center justify-content-center weight-400">Edit</button>

                <ul class="passwords__card-body-content w-100 d-flex flex-column">
                    <button
                        class="passwords__card-body-content-item d-flex align-items-center justify-content-space-between">
                        <span class="weight-500">Email: {{ password.email }}</span>
                        <IconCopy />
                    </button>

                    <button
                        class="passwords__card-body-content-item d-flex align-items-center justify-content-space-between">
                        <span class="weight-500">Password: {{ password.password }}</span>
                        <IconCopy />
                    </button>

                    <a :href="password.website" target="_blank"
                        class="passwords__card-body-content-item d-flex align-items-center justify-content-space-between">
                        <span class="weight-500">Website: {{ password.website }}</span>
                        <IconArrow />
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.passwords {
    margin-top: 4.2rem;
    margin-bottom: 15rem;
    gap: 1.6rem;

    &__card {
        padding: 1.5rem 2.4rem;
        border-radius: 1.6rem;
        background-color: $col-grayishBlue;

        .account {
            cursor: pointer;

            &__info {
                gap: 1.6rem;

                img {
                    width: 3.2rem;
                    height: 3.2rem;
                    border-radius: 0.4rem;
                    object-fit: cover;
                }

                h4 {
                    @include font(1.4rem, 2rem);
                    font-weight: 600;
                    color: $col-black;

                    span {
                        font-weight: 400;
                    }
                }
            }
        }

        &-body {
            margin-top: 2rem;

            .edit {
                margin-bottom: 2rem;
                border: 0.5px solid $col-fadedBlack;
                border-radius: 0.4rem;
                width: 6.4rem;
                height: 2.4rem;
                @include font(1.2rem, 2rem);
                color: $col-black;
                transition: all 0.2s ease-in-out;

                &:hover {
                    background-color: $col-fadedBlack;
                    color: $col-white;
                }
            }

            &-content {
                max-width: 35rem;
                gap: 1.6rem;

                &-item {
                    gap: 1.6rem;
                    color: $col-black;

                    span {
                        @include font(1.2rem, 2rem);
                    }
                }
            }
        }
    }
}
</style>
