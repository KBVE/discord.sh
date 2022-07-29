// ** React Imports
import { ChangeEvent } from 'react'

// ** Next/Router
import Router from 'next/router'

// ** MUI Imports
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Library
import { getHashString } from '@core/utils/hashstring'

// ** Redux
import { useAppDispatch } from '@core/hooks/redux'
import * as backdropReducer from 'redux/reducers/backdropReducer'

// Styled component for the form
const Form = styled('form')(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`
}))

const FormLayoutsAlignment = () => {
  const hashString: string | undefined = getHashString()
  const dispatch = useAppDispatch()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    // This is where your submit code will be

    console.log(hashString)
    dispatch(backdropReducer.set({
      open: true,
      children: <Typography variant="h5" textAlign="center" sx={{
        pt: 4
      }}>Voted! Loading</Typography>,
      timeout: 1500
    }))

    Router.push(`/guilds/#${hashString}`)
  }

  return (
    <Card>
      <CardHeader title='Daily Vote @ Guild' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent sx={{ minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Form onSubmit={handleSubmit}>
          <Stack direction='column' spacing={4} p={4}>
            <Typography variant='h5'>Guild Name</Typography>
            <Button
              size='large'
              type='submit'
              variant='contained'
              sx={{
                width: '100%',
                textTransform: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <Typography variant='h5'>Vote</Typography>
            </Button>

          </Stack>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsAlignment
