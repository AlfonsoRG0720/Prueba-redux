import { configureStore } from '@reduxjs/toolkit'
import  SesionReducer  from "./../slices/counterSlice";
import  UsuarioReducer from "./../slices/loginSlice";

export const store = configureStore({
  reducer: {
    sesion: SesionReducer,
    usuarios: UsuarioReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;