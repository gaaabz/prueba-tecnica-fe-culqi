<script setup lang="ts">
import CustomCounter from '@/components/CustomCounter.vue'
import CustomPaginator from '@/components/CustomPaginator.vue'
import CustomTable from '@/components/CustomTable.vue'
import { getEmpleados } from '@/services'
import { useUserStore } from '@/stores'
import { Empleado } from '@/types'
import LoadingFilters from '@components/LoadingFilters.vue'
import LoadingHeader from '@components/LoadingHeader.vue'
import LoadingTable from '@components/LoadingTable.vue'
import { mdiFileDownloadOutline, mdiMagnify, mdiPlus } from '@mdi/js'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from 'vue3-icon'

const store = useUserStore()
const { setUserAuth } = store
const { token } = storeToRefs(store)
const router = useRouter()

const isLoading = ref<Boolean>(true)
const tableData = ref<{
    data: Array<Empleado> | undefined
    total: number | undefined
    showing: number
    currentPage: number
}>({
    data: undefined,
    total: undefined,
    showing: 10,
    currentPage: 1,
})

const totalPages = computed(() => {
    return Math.ceil(tableData.value.total ? tableData.value.total / tableData.value.showing : 0)
})

const handleShowing = (value: number) => {
    tableData.value.showing = value

    if (tableData.value.currentPage > totalPages.value) {
        tableData.value.currentPage = totalPages.value
    }
}

watchEffect(() => {
    if (!token.value) return

    isLoading.value = true

    getEmpleados(tableData.value.showing, tableData.value.currentPage)
        .then(response => {
            isLoading.value = false
            tableData.value.data = response.data.data
            tableData.value.total = response.data.total
        })
        .catch(error => {
            isLoading.value = true

            if (error.response.data) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.message,
                    confirmButtonText: 'Ok',
                    showCancelButton: false,
                }).then(() => {
                    if (error.response.data.message === 'Token inválido') {
                        setUserAuth({
                            token: '',
                            user: {
                                id: null,
                                nombre: '',
                                correo: '',
                                cargo: '',
                                departamento: '',
                                oficina: '',
                                estadoCuenta: '',
                            },
                        })
                        router.push({ name: 'LoginPage' })
                    }
                    isLoading.value = false
                })
            }
        })
})
</script>

<template>
    <div class="content">
        <template v-if="isLoading">
            <div class="content__header">
                <div class="content__title">Empleados</div>
                <div class="content__options">
                    <loading-header />
                </div>
            </div>
            <div class="content__filters">
                <loading-filters />
            </div>
            <div class="content__table">
                <loading-table />
            </div>
        </template>

        <template v-else>
            <div class="content__header">
                <div class="content__title">
                    Empleados
                    <small>Gestiona tus empleados</small>
                </div>
                <div class="content__options">
                    <button class="button button--outline">
                        <svg-icon
                            type="mdi"
                            :path="mdiFileDownloadOutline"
                            :size="20"
                        />
                        <span>Descargar</span>
                    </button>
                    <button class="button button--filled">
                        <svg-icon
                            type="mdi"
                            :path="mdiPlus"
                            :size="20"
                        />
                        <span>Nuevo</span>
                    </button>
                </div>
            </div>
            <div class="content__filters">
                <div class="content__search">
                    <input
                        autocomplete="off"
                        type="text"
                        placeholder="Buscar empleado"
                    />
                    <svg-icon
                        type="mdi"
                        :path="mdiMagnify"
                        :size="24"
                    />
                </div>
                <div class="content__charge">
                    <select
                        name="cargo"
                        id="cargo"
                    >
                        <option value="">Nombre de Cargo</option>
                    </select>
                </div>
            </div>
            <div class="content__table">
                <custom-table :table-data="tableData?.data" />
            </div>
            <div class="content__pagination">
                <custom-paginator
                    :current-page="tableData?.currentPage"
                    :showing="tableData?.showing"
                    :total="tableData?.total"
                    :total-pages="totalPages"
                    @update:currentPage="tableData.currentPage = $event"
                />

                <custom-counter
                    :current-page="tableData?.currentPage"
                    :page-count="tableData?.data?.length || 0"
                    :showing="tableData?.showing"
                    :total="tableData?.total"
                    @update:showing="handleShowing($event)"
                />
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.button {
    @apply h-14 flex items-center gap-3 px-5 rounded-[10px];

    svg {
        @apply block;
    }

    span {
        @apply font-bold text-base;
    }

    &--outline {
        @apply border border-gray-900 text-gray-900;
    }

    &--filled {
        @apply bg-gray-900 text-white;
    }
}

.content {
    &__filters {
        @apply flex justify-between items-center gap-4;
    }

    &__search {
        @apply flex flex-grow flex-shrink basis-0 items-center gap-3 bg-white rounded-[10px] border border-gray-200 px-4 h-14;

        input {
            @apply flex-1 outline-none text-sm;
        }

        svg {
            @apply block;
        }
    }

    &__charge {
        @apply flex flex-grow basis-auto max-w-[315px] items-center gap-3;

        select {
            @apply bg-white rounded-[10px] border border-gray-200 px-4 h-14 flex-1 outline-none text-sm;
        }

        svg {
            @apply block;
        }
    }

    &__pagination {
        @apply flex justify-between items-center gap-4;
    }
}
</style>
