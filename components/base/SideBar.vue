<script lang="ts" setup>
const categories = [
    { category: "Social Media", count: "11" },
    { category: "Music", count: "2" },
    { category: "Movie Apps", count: "5" },
    { category: "Educational", count: "3" }
];
</script>

<template>
    <div class="sidebar">
        <h2 class="sidebar__title weight-600">Categories</h2>

        <ul class="sidebar__list d-flex flex-column w-100">
            <li class="sidebar__list-item" v-for="category in categories">
                <button class="w-100 d-flex align-items-center justify-content-space-between">
                    <span class="category weight-600">{{ category.category }}</span>
                    <span class="count d-flex align-items-center justify-content-center">{{ category.count }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    width: 37.5rem;
    height: 100vh;
    background-color: $col-white;
    padding: 3.4rem 6rem;
    border-right: 0.1rem solid $col-grey;
    overflow-y: auto;

    &__title {
        @include font(1.4rem, 2rem);
        color: $col-lightBlack;
        margin-bottom: 2.1rem;
    }

    &__list {
        gap: 1.2rem;

        &-item {
            button {
                padding-left: 2rem;

                .category {
                    @include font(1.4rem, 2rem);
                    color: $col-black;
                    transition: color 0.2s ease-in-out;

                    &:hover {
                        color: $col-fadedBlack;
                    }
                }

                .count {
                    width: 2.4rem;
                    height: 2.4rem;
                    border-radius: 0.4rem;
                    background-color: $col-lightBlack;
                    @include font(1.4rem, 2rem);
                    color: $col-fadedBlack;
                }
            }
        }
    }
}
</style>
