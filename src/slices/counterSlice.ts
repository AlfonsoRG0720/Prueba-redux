import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ISesionState {
  value: boolean
}

const initialState: ISesionState = {
  value: false,
}

export const SesionSlice = createSlice({
  name: 'sesion',
  initialState,
  reducers: {
    online: (state) => {
      state.value = true;
    },
    offline: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { online, offline } = SesionSlice.actions

export default SesionSlice.reducer