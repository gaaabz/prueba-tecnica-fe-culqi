<script setup lang="ts">
import { useUserStore } from '@/stores'
import culqiLogoImgUrl from '@assets/img/logo_black.svg'
import { mdiAccountMultipleOutline, mdiBriefcaseOutline } from '@mdi/js'
import SvgIcon from 'vue3-icon'

const store = useUserStore()
const { logout, initalsOfName, user } = store
</script>

<template>
    <main class="dashboard">
        <aside class="dashboard__aside">
            <div class="dashboard__logo">
                <img
                    :src="culqiLogoImgUrl"
                    alt="Culqi"
                />
            </div>
            <nav class="dashboard__nav">
                <router-link
                    :to="{ name: 'EmpleadosPage' }"
                    class="dashboard__link group"
                >
                    <svg-icon
                        class="group-hover:text-emerald-500"
                        type="mdi"
                        :path="mdiAccountMultipleOutline"
                        :size="20"
                    />
                    <span class="group-hover:text-emerald-500">Empleados</span>
                </router-link>
                <router-link
                    :to="{ name: 'ReclutamientoPage' }"
                    class="dashboard__link group"
                >
                    <svg-icon
                        class="group-hover:text-emerald-500"
                        type="mdi"
                        :path="mdiBriefcaseOutline"
                        :size="20"
                    />
                    <span class="group-hover:text-emerald-500">Reclutamiento</span>
                </router-link>
            </nav>
            <div class="dashboard__logout">
                <button @click.prevent="logout">Salir</button>
            </div>
        </aside>
        <section class="dashboard__main-section">
            <header class="dashboard__topbar">
                <div class="dashboard__user">
                    <div class="dashboard__avatar">{{ initalsOfName }}</div>
                    <div class="dashboard__name">{{ user?.user.nombre }}</div>
                </div>
            </header>
            <article class="dashboard__content">
                <router-view></router-view>
            </article>
        </section>
    </main>
</template>

<style lang="scss">
.dashboard {
    @apply flex min-h-screen bg-gray-100;

    &__aside {
        @apply flex flex-col w-[280px] border-r border-r-gray-200 py-8 px-6 gap-6 bg-white h-screen overflow-y-auto sticky top-0;
    }

    &__logo {
        @apply flex justify-center py-[6px];

        img {
            @apply block h-9 w-auto;
        }
    }

    &__nav {
        @apply flex flex-col flex-grow flex-shrink basis-0;
    }

    &__link {
        @apply py-4 text-gray-400 flex items-center gap-[10px] hover:text-emerald-500;

        svg {
            @apply block;
        }

        span {
            @apply block text-sm font-bold text-gray-900;
        }

        &.active {
            @apply text-emerald-500;

            svg {
                @apply text-emerald-500;
            }

            span {
                @apply text-emerald-500;
            }
        }
    }

    &__logout {
        @apply flex;

        button {
            @apply block flex-1 h-12 px-4 text-sm font-bold text-gray-900 border border-gray-900 rounded-[10px];
        }
    }

    &__main-section {
        @apply flex flex-1 flex-col gap-8;
    }

    &__topbar {
        @apply flex justify-end border-b border-b-gray-200 px-6 items-center bg-white p-8;
    }

    &__user {
        @apply flex items-center gap-2 cursor-default;
    }

    &__avatar {
        @apply flex justify-center items-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold;
    }

    &__name {
        @apply text-xs font-bold text-gray-900;
    }

    &__content {
        @apply pb-8 px-6 flex-1 overflow-y-auto;

        & .content {
            @apply flex flex-col gap-6 bg-white rounded-2xl p-6;

            &__header {
                @apply flex justify-between items-center;

                & > .content__title {
                    @apply flex flex-col gap-1 text-2xl font-bold text-gray-900;

                    small {
                        @apply block text-sm font-normal text-gray-400;
                    }
                }

                & > .content__options {
                    @apply flex justify-end items-center gap-5;
                }
            }
        }
    }
}
</style>
