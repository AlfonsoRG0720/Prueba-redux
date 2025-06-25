import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import { ListaUsuarios, leerBBDD, filtrarUsuarioID } from "./../models/BBDD-model";

export interface IusuariosState {
  id:number,
  nombre:string,
  contrasenia:number,
  productosID:number[]
}

const initialState: IusuariosState[] = ListaUsuarios;

export const UsuarioSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    leerUsuarios: () => {
        return leerBBDD();
    },
    filtrarUsuario: (state, action: PayloadAction<number>) => {
        const usuario = filtrarUsuarioID(action.payload);
        return usuario ? [usuario] : [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { leerUsuarios, filtrarUsuario } = UsuarioSlice.actions

export default UsuarioSlice.reducer