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

export default function Home() {
  const { data, error } = useSWR(`https://api.publicapis.org/entries`, fetcher)

  return (
    <Box p={4}>
      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ComputerIcon />
          <Typography variant="h5">
            Hello World. <Link href="/about">About</Link> <Link href="/kbve">KBVE</Link>
          </Typography>
        </Stack>
        {data && !error
          ? <Typography variant="pre">{JSON.stringify({ data })}</Typography>
          : !data && !error
            ? <CircularProgress />
            : <Typography variant="pre" sx={{ color: 'red' }}>
              {JSON.stringify({ error })}
            </Typography>
        }
      </Stack>
    </Box>
  )
}
