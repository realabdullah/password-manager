<script lang="ts" setup>

</script>

<template>
    <div class="page__actions d-flex align-items-center justify-content-space-between">
        <form>
            <input type="search" name="search" placeholder="Search">
            <label for="search">
                <IconSearch />
            </label>
        </form>

        <button class="weight-600 d-flex align-items-center justify-content-center">
            <IconAdd />
            Add New
        </button>
    </div>
</template>

<style scoped lang="scss">
.page__actions {
    margin-bottom: 3.4rem;

    form {
        position: relative;
        width: 35rem;
        height: 4.2rem;
        border-radius: 0.8rem;
        background-color: $col-lightGrey;
        padding: 0 1.3rem;

        input {
            width: 100%;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            @include font(1.4rem, 2rem);
            color: $col-black;
        }

        label {
            position: absolute;
            top: 50%;
            right: 1.3rem;
            transform: translateY(-50%);
        }
    }

    button {
        width: 11.1rem;
        height: 4.2rem;
        border-radius: 0.8rem;
        background-color: $col-bluePurple;
        color: $col-white;
        @include font(1.4rem, 2rem);
        gap: 0.8rem;
        transition: opacity 0.2s ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
