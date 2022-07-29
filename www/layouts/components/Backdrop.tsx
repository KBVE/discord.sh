// ** Core
import React from 'react'

// ** @mui
import Backdrop from '@mui/material/Backdrop'
import Stack from '@mui/material/Stack'

// ** Core Component
import LoadingComponent from './LoadingComponent'

// ** Redux
import { useAppDispatch, useAppSelector } from '@core/hooks/redux'
import * as backdropReducer from 'redux/reducers/backdropReducer'

const BackdropComponent = () => {
  const dispatch = useAppDispatch()

  const {
    open,
    children,
    timeout
  } = useAppSelector(state => state.backdrop)

  React.useEffect(() => {
    if (!dispatch) return

    let interval: undefined | ReturnType<typeof setTimeout> = undefined
    if (open) {
      interval = setTimeout(() => dispatch(backdropReducer.reset()), timeout ?? 500)
    }

    return () => clearTimeout(interval)
  }, [dispatch, open, timeout])

  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Stack direction="column" spacing={2}>
        <LoadingComponent />
        {children}
      </Stack>
    </Backdrop>
  )
}

export default BackdropComponent