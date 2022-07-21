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

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Kbve() {

  const { data, error } = useSWR(`https://api.publicapis.org/entries`, fetcher)

  // From https://github.com/KBVE/discord.sh/commit/3d0b5f8cf2acc21aec964e5af5f3416875a25353
  return (
    <Box p={4}>
      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ComputerIcon />
          <Typography variant="h5">
            KBVE. <Link href="/about">About</Link> <Link href="/">Home</Link>
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
