import router from '@/routes/router'
import { User } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'

export const useUserStore = defineStore('userStore', () => {
    const user = ref<User>()

    const isAuthenticated = computed(() => (user.value?.token ? true : false))
    const token = computed(() => user.value?.token)
    const initalsOfName = computed(() => {
        if (user.value?.user.nombre) {
            const name = user.value?.user.nombre?.split(' ')

            return name.length > 1 ? `${name[0].charAt(0)}${name[1].charAt(0)}` : name[0].charAt(0)
        }
    })

    const setUserAuth = (newUser: User) => {
        user.value = newUser
        window.localStorage.setItem('user', JSON.stringify(newUser))
    }

    const logout = () => {
        user.value = undefined
        window.localStorage.removeItem('user')
        router.push({ name: 'LoginPage' })
    }

    watchEffect(() => {
        const userLocalStorage = window.localStorage.getItem('user')
        if (userLocalStorage) {
            setUserAuth(JSON.parse(userLocalStorage))
        }
    })

    return {
        user,
        isAuthenticated,
        initalsOfName,
        token,
        setUserAuth,
        logout,
    }
})
