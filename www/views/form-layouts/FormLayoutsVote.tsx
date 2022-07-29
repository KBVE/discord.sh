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

  const currentMultiplier = (concurrentVotes: number) => {
    let currentMult = 1
    for (let i = 0; i < concurrentVotes; i++) {
      currentMult = currentMult < 10
        ? currentMult + (currentMult * 0.10)
        : currentMult
    }

    return currentMult
  }

  const calcTokens = (b = 0, totalConsecutiveVotes: number) => {
    let currentBalance = b
    for (let i = 0; i < totalConsecutiveVotes; i++) {
      currentBalance = currentBalance + currentMultiplier(i)
    }

    return currentBalance
  }

  //const compoundInterest = (Principle*(1 + (rate / numberoftimes)))^(numTimesPerTimePeriod*numTimePeriodsElapsed)

  const compoundInterest = (initial: number, rate: number, numberOfIterations: number) => {
    let total = initial
    for (let i = 0; i < numberOfIterations; i++) {
      total = ((initial + 1) * (1 + (currentMultiplier(numberOfIterations) / numberOfIterations)))
    }

    return total
  }

  const Aye = (i: number, r: number, d: number) => {
    let t = i
    for (let idx = 0; idx < d; idx++) {
      t = (t * (1 + (r / 365))) ^ (d * idx)
    }

    return t
  }

  return (
    <Card>
      <CardHeader title='Daily Vote @ Guild' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent sx={{ minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

        <Typography>OneMonthTokens: {Math.floor(calcTokens(8000, 365))}</Typography>
        <Typography>OneMonthMultiplier: {Math.floor(currentMultiplier(365) * 100)}%</Typography>

        {/* Below */}
        <Typography>
          A = {1 * (1 + 5 / 31) ^ (31 * 2)}
        </Typography>
        <Typography>
          Aye = {(1 * (1 + (0.05 / 365))) ^ 31}
        </Typography>
        <Typography>
          Ayet = {Aye(1, 0.05, 8)}
        </Typography>

        {/* Above */}
        <Typography>OneMonthCompoundInterestTokens: {Math.floor(31 * compoundInterest(1, 0.05, 31))}</Typography>
        <Typography>OneMonthVotedCompoundInterest: {(compoundInterest(1, 0.05, 31))}</Typography>
        <Typography>OneYearCompoundInterestTokens: {Math.floor(365 * compoundInterest(1, 0.05, 365))}</Typography>
        <Typography>OneYearVotedCompoundInterest: {(compoundInterest(1, 0.05, 365 * 10))}</Typography>

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
