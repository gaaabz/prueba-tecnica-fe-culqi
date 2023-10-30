<script setup lang="ts"></script>

<template>
    <div class="loading__filters">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<style lang="scss" scoped>
.loading__filters {
    @apply flex justify-between items-center gap-4 w-full;

    span {
        @apply block flex-1 bg-gray-50 rounded-full h-9;
    }
}
</style>
