import React from 'react'
import useRouter from 'next/router'
// @mui
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const TestSlugPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Box>
      <Stack direction="column" spacing={1}>
        <Typography variant="h6">{slug?.length} Query Params</Typography>
        {slug?.map(s => (<Typography variant="body1">{s}</Typography>))}
      </Stack>
    </Box>
  )
}

export default TestSlugPage