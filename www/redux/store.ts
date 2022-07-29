import {
  configureStore,
  ThunkAction,
  Action
} from '@reduxjs/toolkit'

import * as reducers from './reducers/index'

export function makeStore() {
  return configureStore({
    reducer: reducers
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store