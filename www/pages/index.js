import Link from 'next/link'
// @mui/material
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Home() {
  return (
    <Box p={4}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h5">
          Hello World. <Link href="/about">About</Link>
        </Typography>
      </Stack>
    </Box>
  )
}
