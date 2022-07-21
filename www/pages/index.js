import React from 'react'
import Link from 'next/link'
import _ from 'lodash'
import useSWR from 'swr'
// @mui/material
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
// @mui/icons-material
import ComputerIcon from '@mui/icons-material/Computer'

const fetcher = (url) => fetch(url).then((res) => res.json()); 0

const Home = () => {

  const [timedOut, setTimedOut] = React.useState(false)
  React.useEffect(() => {
    let timer1 = setTimeout(() => setTimedOut(true), 5 * 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <Box p={4}>
      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ComputerIcon />
          <Typography variant="h5">
            Hello World. <Link href="/about">About</Link> <Link href="/kbve">KBVE</Link>
          </Typography>
        </Stack>
        {timedOut
          ? <Typography variant="pre">{JSON.stringify({ timedOut })}</Typography>
          : <CircularProgress />
        }
      </Stack>
    </Box>
  )
}

export default Home