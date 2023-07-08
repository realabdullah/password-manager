<script lang="ts" setup>
interface Props {
    mode: string;
}

defineProps<Props>();
</script>

<template>
    <div class="add__password d-flex flex-column">
        <h1 class="add__password-header weight-600 text-center">{{ mode === "edit" ? "Edit Password" : "Add a New Password"
        }}</h1>

        <form class="add__password-form w-100 d-flex flex-column">
            <label for="website" class="add__password-form-label w-100 d-flex flex-column">
                <span class="weight-400">Website</span>
                <input type="text" id="website" class="add__password-form-input" />
            </label>

            <label for="email" class="add__password-form-label w-100 d-flex flex-column">
                <span class="weight-400">Email</span>
                <input type="email" id="email" class="add__password-form-input" />
            </label>

            <label for="password" class="add__password-form-label w-100 d-flex flex-column">
                <span class="weight-400">Password</span>
                <input type="password" id="password" class="add__password-form-input" />
            </label>

            <label for="category" class="add__password-form-label w-100 d-flex flex-column">
                <span>Category</span>
                <select id="category" class="add__password-form-input">
                    <option value="social">Social</option>
                    <option value="work">Work</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <button class="add__password-form-btn">
                {{ mode === "edit" ? "Edit Password" : "Add Password" }}
                <IconArrow direction="right" />
            </button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.add__password {
    &-header {
        @include font(1.5rem, 1.8rem);
        color: $col-black;
        margin-bottom: 3rem;
    }

    &-form {
        gap: 1.5rem;

        &-label {
            gap: 0.5rem;

            span {
                @include font(1.2rem, 1.6rem);
                color: $col-black;
            }

            input,
            select {
                @include font(1.4rem, 1.6rem);
                color: $col-black;
                padding: 1.5rem;
                border-radius: 0.8rem;
                border: 1px solid #E4E4E7;
                outline: none;
                transition: all 0.2s;

                &:focus {
                    border-color: $col-bluePurple;
                }
            }
        }

        &-btn {
            @include font(1.4rem, 1.6rem);
            color: $col-white;
            background-color: $col-bluePurple;
            border-radius: 0.8rem;
            padding: 1.5rem;
            transition: all 0.2s;

            &:hover {
                background-color: darken($col-bluePurple, 10%);
            }
        }
    }
}
</style>
