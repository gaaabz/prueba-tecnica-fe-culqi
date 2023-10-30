<script setup lang="ts">
import { getToken } from '@/services'
import { useUserStore } from '@/stores'
import { UserAuth } from '@/types'
import { mdiInformationOutline } from '@mdi/js'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from 'vue3-icon'

const store = useUserStore()
const { setUserAuth } = store
const router = useRouter()

const model: UserAuth = reactive({
    correo: '',
    password: '',
})

const errorMessage = ref(false)

const submit = async (model: UserAuth) => {
    const newModel = { ...model }

    await getToken(newModel)
        .then(response => {
            errorMessage.value = false

            setUserAuth(response.data.data)
            router.push({ name: 'EmpleadosPage' })
        })
        .catch(() => {
            errorMessage.value = true
        })
}
</script>

<template>
    <form
        class="form"
        @submit.prevent="submit(model)"
    >
        <h4 class="form__title">Inicia sesión</h4>
        <div class="form__fieldsets">
            <fieldset class="form__fieldset">
                <label
                    class="form__label"
                    for="email"
                >
                    Correo electrónico <span>*</span>
                </label>
                <input
                    v-model="model.correo"
                    autocomplete="on"
                    class="form__input"
                    id="email"
                    name="email"
                    placeholder="Ingresa el correo electrónico"
                    type="email"
                />
            </fieldset>
            <fieldset class="form__fieldset">
                <label
                    class="form__label"
                    for="password"
                >
                    Contraseña <span>*</span>
                </label>
                <input
                    v-model="model.password"
                    autocomplete="on"
                    class="form__input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ingresa la contraseña"
                />
            </fieldset>
        </div>
        <p
            v-if="errorMessage"
            class="form__message"
        >
            <svg-icon
                type="mdi"
                :path="mdiInformationOutline"
                :size="20"
            />Correo o contraseña incorrectos
        </p>
        <button
            class="form__submit"
            type="submit"
        >
            Iniciar sesión
        </button>
        <p class="form__signup">¿Eres nuevo aquí? <a href="#">Crea una cuenta</a></p>
    </form>
</template>

<style lang="scss" scoped>
.form {
    @apply max-w-[480px] w-full flex flex-col gap-8;

    &__title {
        @apply text-center text-2xl font-bold text-gray-900;
    }

    &__fieldsets {
        @apply flex flex-col gap-6;
    }

    &__fieldset {
        @apply flex flex-col gap-[10px];
    }

    &__label {
        @apply text-sm font-medium text-gray-900;

        span {
            @apply text-red-500;
        }
    }

    &__input {
        @apply border border-gray-300 rounded-[10px] px-4 text-sm text-gray-900 h-14;

        &:focus {
            @apply outline-none ring-1 ring-emerald-500;
        }
    }

    &__signup {
        @apply text-center text-sm text-gray-400 font-medium cursor-default;

        a {
            @apply text-emerald-500 hover:underline;
        }
    }

    &__message {
        @apply flex items-center gap-1 text-xs text-red-500 font-medium;
    }

    &__submit {
        @apply bg-gray-900 text-white font-bold text-base p-4 rounded-[10px];
    }
}
</style>
