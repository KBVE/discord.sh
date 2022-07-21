import React from 'react'
import Link from 'next/link'
import _ from 'lodash'
// @mui/material
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
// @mui/icons-material
import ComputerIcon from '@mui/icons-material/Computer'

export default function Kbve() {

  return (
    <Box p={4}>
      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ComputerIcon />
          <Typography variant="h5">
            Hello World. <Link href="/about">About</Link> <Link href="/">Home</Link>
          </Typography>
        </Stack>
       
      </Stack>
    </Box>
  )
}
