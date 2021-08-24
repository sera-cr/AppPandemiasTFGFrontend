export interface Comunidad {
    id: number,
    name: string
}

export interface Limitrofe {
    comunidad1_id: number,
    comunidad2_id: number
}

export interface Restriccion {
    id: number,
    active: boolean,
    information: String,
    category: String
}

export interface ComunidadRestriccion {
    comunidad_id: number,
    restriccion_id: number
}