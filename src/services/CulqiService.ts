import apiClient from '@/plugins/axios'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { token } = storeToRefs(store)

export async function getToken({ correo, password }: { correo: string; password: string }) {
    return await apiClient.post('/auth/login', { correo: correo, password: password })
}

export async function getEmpleados(limit: Number, page: Number) {
    return await apiClient.get(`/empleados?limit=${limit}&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    })
}
