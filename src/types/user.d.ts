export interface User {
    token: string
    user: {
        id: number | null
        nombre: string
        correo: string
        cargo: string
        departamento: string
        oficina: string
        estadoCuenta: string
    }
}

export interface Empleado {
    id: number
    nombre: string
    correo: string
    cargo: string
    departamento: string
    oficina: string
    estadoCuenta: string
}
