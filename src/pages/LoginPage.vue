<script setup lang="ts">
import loginBackgroundImgUrl from '@assets/img/login.png'
import culqiLogoImgUrl from '@assets/img/logo_white.svg'
import LoginForm from '@components/LoginForm.vue'
</script>

<template>
    <div class="login-container">
        <div class="login-container__banner">
            <div class="login-container__banner-image">
                <img
                    :src="loginBackgroundImgUrl"
                    alt="Dale más power ⚡ a tus empleados hoy 💪"
                />
            </div>
            <div class="login-container__content">
                <div class="login-container__logo">
                    <img
                        :src="culqiLogoImgUrl"
                        alt="Culqi"
                    />
                </div>
                <h2 class="login-container__title">Dale más power ⚡ a tus empleados hoy 💪</h2>
                <p class="login-container__subtitle">Te ayudamos a gestionarlos de manera más sencilla</p>
            </div>
        </div>
        <div class="login-container__form-container">
            <login-form />
            <span class="login-container__copyright">© 2023 Culqi . Todos los derechos reservados</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-container {
    @apply grid grid-cols-2 min-h-screen;

    &__banner {
        @apply flex flex-col justify-stretch bg-gray-900;
    }

    &__banner-image {
        @apply h-0 flex-grow flex-shrink basis-0;

        img {
            @apply w-full h-full object-cover object-center;
        }
    }

    &__content {
        @apply flex flex-col gap-6 px-[50px] pt-[50px] pb-[80px] border-t-[5px] border-emerald-500;
    }

    &__logo {
        @apply block h-9 w-auto;
    }

    &__title {
        @apply text-5xl font-bold text-white leading-[58px];
    }

    &__subtitle {
        @apply text-lg font-normal text-white leading-7;
    }

    &__form-container {
        @apply p-16 relative flex flex-col justify-center items-center bg-white;
    }

    &__copyright {
        @apply absolute bottom-6 text-center text-gray-400 font-medium text-sm;
    }
}
</style>
