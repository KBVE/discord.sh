import { ReactFragment } from 'react'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../store'

export interface BackdropState {
  open: boolean,
  children: ReactFragment | JSX.Element | undefined,
  timeout: number | undefined,
}

const initialState: BackdropState = {
  open: false,
  children: undefined,
  timeout: undefined
}

export const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<BackdropState>) => action.payload,
    reset: () => initialState
  }
})

export const { set, reset } = backdropSlice.actions

export const useBackdrop = (state: AppState) => state.backdrop

export default backdropSlice.reducer