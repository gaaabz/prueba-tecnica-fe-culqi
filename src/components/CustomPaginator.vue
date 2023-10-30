<script setup lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import SvgIcon from 'vue3-icon'

const props = defineProps<{
    currentPage: number
    showing: number
    total: number | undefined
    totalPages: number | undefined
}>()

const emit = defineEmits<{
    (e: 'update:currentPage', value: number): void
}>()
</script>

<template>
    <div class="paginator">
        <button
            class="paginator__prev"
            @click="emit('update:currentPage', props.currentPage - 1)"
            :disabled="props.currentPage === 1"
        >
            <svg-icon
                type="mdi"
                :path="mdiChevronLeft"
                :size="20"
            />
        </button>
        <div class="paginator__pages">
            <button
                :class="['paginator__page', props.currentPage === Number(index) ? 'active' : '']"
                v-for="index in totalPages"
                :key="index"
                @click="emit('update:currentPage', Number(index))"
            >
                {{ index }}
            </button>
        </div>
        <button
            class="paginator__next"
            @click="emit('update:currentPage', props.currentPage + 1)"
            :disabled="props.currentPage === totalPages"
        >
            <svg-icon
                type="mdi"
                :path="mdiChevronRight"
                :size="20"
            />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.paginator {
    @apply flex items-center gap-6;

    &__prev,
    &__next {
        @apply h-8 w-8 flex items-center justify-center rounded-lg border border-gray-100 text-gray-900;

        &:hover {
            @apply bg-gray-100;
        }

        &:disabled {
            @apply text-gray-400 cursor-not-allowed;

            &:hover {
                @apply bg-transparent;
            }
        }
    }

    &__pages {
        @apply flex items-center;
    }

    &__page {
        @apply h-8 w-8 flex items-center justify-center rounded-lg text-gray-900 text-xs font-bold;

        &.active,
        &:hover {
            @apply bg-gray-100;
        }
    }
}
</style>
