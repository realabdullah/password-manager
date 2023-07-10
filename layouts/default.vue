<script lang="ts" setup>
definePageMeta({
    middleware: ["guest"],
});

const showToast = ref(false);
const toastMessage = ref("");

useListen("showToast", (message: string) => {
    showToast.value = true;
    toastMessage.value = message;
    setTimeout(() => {
        showToast.value = false;
        toastMessage.value = "";
    }, 3000);
});
</script>

<template>
    <slot />
    <!-- TOAST NOTIFICATION -->
    <BaseToast v-if="showToast" :message="toastMessage" />
</template>
