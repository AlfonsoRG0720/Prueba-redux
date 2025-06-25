export interface IUsuario
    {
        id: number,
        nombre: string,
        contrasenia: number,
        productosID: number[],
    }

export const ListaUsuarios: IUsuario[] = [
    {
        id: 1,
        nombre: 'Alfonso',
        contrasenia: 1111,
        productosID: [1, 3],
    },
    {
        id: 2,
        nombre: 'Cata',
        contrasenia: 2222,
        productosID: [2, 3, 1],
    },
    {
        id: 3,
        nombre: 'Andres',
        contrasenia: 3333,
        productosID: [2],
    }
];


export function leerBBDD() {
    return ListaUsuarios;
}

export function filtrarUsuarioID(id:number) {
    const ListaUsuarios = leerBBDD();

    const usuarioFiltrado = ListaUsuarios.find((p)=>p.id===id) || null;

    return usuarioFiltrado;
}