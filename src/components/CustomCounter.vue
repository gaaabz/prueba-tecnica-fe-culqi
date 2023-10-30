<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
    currentPage: number
    pageCount: number
    showing: number
    total: number | undefined
}>()

const emit = defineEmits<{
    (e: 'update:showing', value: number): void
}>()

const newShowing = ref<number>(props.showing)

const fromNumber = computed(() => {
    return props.showing * props.currentPage - props.showing + 1
})

const toNumber = computed(() => {
    return props.showing * props.currentPage - props.showing + props.pageCount
})
</script>

<template>
    <div class="counter">
        <div class="counter__text">Mostrando {{ fromNumber }} a {{ toNumber }} de {{ props.total }} registros</div>
        <select
            name="counter"
            id="counter"
            class="counter__select"
            v-model="newShowing"
            @change="emit('update:showing', Number(newShowing))"
        >
            <option value="10">Mostrar 10</option>
            <option value="20">Mostrar 20</option>
            <option value="30">Mostrar 30</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.counter {
    @apply flex items-center justify-end gap-4;

    &__text {
        @apply text-gray-500 text-xs;
    }

    &__select {
        @apply border border-gray-100 rounded-lg text-sm font-semibold text-gray-500 h-8 px-3;
    }
}
</style>
