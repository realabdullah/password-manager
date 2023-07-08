<script lang="ts" setup>
const showDeleteModal = ref(false);
const showAddEditModal = ref(false);
const mode = ref("");

const toggleDeleteModal = () => {
    mode.value = (showDeleteModal.value) ? "" : "delete";
    showDeleteModal.value = !showDeleteModal.value;
};

const toggleAddEditModal = (action: string) => {
    mode.value = (action === "add") ? "add" : (action === "edit") ? "edit" : "";
    showAddEditModal.value = !(showAddEditModal.value && action === "");
};

const closeModals = () => {
    mode.value = "";
    showDeleteModal.value = false;
    showAddEditModal.value = false;
};
</script>

<template>
    <div class="main">
        <BaseHeader />
        <div class="container">
            <BaseSideBar />

            <div class="container__content">
                <PageAction @toggle-add-modal="toggleAddEditModal('add')" />
                <PasswordCard @toggle-delete-modal="toggleDeleteModal" @toggle-edit-modal="toggleAddEditModal('edit')" />
            </div>
        </div>
    </div>

    <BaseModal v-if="showAddEditModal || showDeleteModal" :width="mode === 'delete' ? '50rem' : '70rem'"
        :height="mode === 'delete' ? '20rem' : '60rem'" @close="closeModals">
        <AddPassword v-if="mode === 'add' || mode === 'edit'" :mode="mode" />
        <DeletePassword v-if="mode === 'delete'" @close="closeModals" />
    </BaseModal>
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
                padding-right: 6rem;
            }

            @media screen and (min-width: 769px) and (max-width: 950px) {
                padding: 3.4rem;
                padding-right: 6rem;
            }
        }
    }
}
</style>
