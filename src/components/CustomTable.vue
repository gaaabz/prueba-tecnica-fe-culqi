<script setup lang="ts">
import { Empleado } from '@/types'
import { mdiEyeOutline, mdiPencil, mdiTrashCanOutline } from '@mdi/js'
import SvgIcon from 'vue3-icon'

const props = defineProps<{
    tableData: Array<Empleado> | undefined
}>()
</script>

<template>
    <table
        class="table"
        cellspacing="0"
        cellpadding="0"
        border="0"
    >
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Nombre cargo</th>
                <th>Departamento</th>
                <th>Oficina</th>
                <th>Cuenta</th>
                <th align="right">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="empleado in props.tableData"
                :key="empleado.id"
            >
                <td>
                    <span>{{ empleado.nombre }}</span>
                    <small>{{ empleado.correo }}</small>
                </td>
                <td>{{ empleado.cargo }}</td>
                <td>{{ empleado.departamento }}</td>
                <td>{{ empleado.oficina }}</td>
                <td>{{ empleado.estadoCuenta }}</td>
                <td>
                    <div class="table__actions">
                        <button class="button button--icon button--green">
                            <svg-icon
                                type="mdi"
                                :path="mdiEyeOutline"
                                :size="20"
                            />
                        </button>
                        <button class="button button--icon button--blue">
                            <svg-icon
                                type="mdi"
                                :path="mdiPencil"
                                :size="20"
                            />
                        </button>
                        <button class="button button--icon button--red">
                            <svg-icon
                                type="mdi"
                                :path="mdiTrashCanOutline"
                                :size="20"
                            />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
.table {
    @apply w-full;

    thead {
        @apply bg-gray-50;

        th {
            @apply p-4 text-left text-gray-500 text-xs font-bold;

            &:first-child {
                @apply rounded-tl-[10px] rounded-bl-[10px];
            }

            &:last-child {
                @apply rounded-tr-[10px] rounded-br-[10px] text-right;
            }
        }
    }

    tbody {
        @apply bg-white;

        tr {
            @apply border-b border-b-gray-100;

            &:last-child {
                @apply border-b-0;
            }

            td {
                @apply p-4 text-xs text-gray-600 border-b border-b-gray-100;

                &:first-child {
                    span {
                        @apply block font-semibold;
                    }

                    small {
                        @apply block text-[10px] text-gray-400;
                    }
                }

                &:last-child {
                    @apply text-right;
                }
            }
        }
    }

    &__actions {
        @apply flex justify-end items-center gap-[10px];
    }
}

.button {
    @apply h-8 w-8 flex items-center justify-center rounded-lg text-white;

    &--green {
        @apply bg-emerald-500;
    }

    &--blue {
        @apply bg-blue-500;
    }

    &--red {
        @apply bg-red-500;
    }
}
</style>
