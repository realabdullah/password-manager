<script lang="ts" setup>
defineProps<{
    message: string;
}>();
</script>

<template>
    <div class="toast d-flex align-items-center position-fixed">
        <IconDone />
        <span class="weight-600">{{ message }}</span>
    </div>
</template>

<style scoped lang="scss">
.toast {
    bottom: 2rem;
    left: 2rem;
    padding: 1rem 2.4rem;
    background-color: $col-bluePurple;
    color: $col-white;
    border-radius: 0.8rem;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
    z-index: 1000000;

    span {
        margin-left: 0.8rem;
        @include font(1rem, 1.3rem);
    }
}
</style>
