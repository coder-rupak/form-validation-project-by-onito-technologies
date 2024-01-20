import { configureStore } from '@reduxjs/toolkit'
import formDataSlice from './formData/formDataSlice'

const store = configureStore({
  reducer: {
    user: formDataSlice
  },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, alerts: AlertsState}
export type AppDispatch = typeof store.dispatch
