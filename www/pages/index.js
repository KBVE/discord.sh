import Link from 'next/link'
// @mui/material
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// @mui/icons-material
import ComputerIcon from '@mui/icons-material/Computer'

export default function Home() {
  return (
    <Box p={4}>
      <Stack direction="row" spacing={2} alignItems="center">
        <ComputerIcon />
        <Typography variant="h5">
          Hello World. <Link href="/about">About</Link> <Link href="/kbve">KBVE</Link>
        </Typography>
      </Stack>
    </Box>
  )
}
