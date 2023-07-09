<script lang="ts" setup>
interface Props {
    for: string;
    label: string;
    type: string;
    placeholder: string;
}

defineProps<Props>();
</script>

<template>
    <label :for="for" class="w-100 d-flex flex-column">
        <span class="weight-400">{{ label }}</span>
        <input :type="type" :id="for" :placeholder=" placeholder " />
    </label>
</template>

<style scoped lang="scss">
label {
    gap: 0.5rem;

    span {
        @include font(1.2rem, 1.6rem);
        color: $col-black;
    }

    input {
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
</style>
