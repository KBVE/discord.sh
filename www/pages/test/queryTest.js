import React from 'react'
import useRouter from 'next/router'
// @mui
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const TestSlugPage = () => {
  const router = useRouter()
  const { query } = router.params

  return (
    <Box>
      <Stack direction="column" spacing={1}>
        <Typography variant="h6">{query ? "Existing" : "Non Existing"} Query Params</Typography>
        {JSON.stringify({ query })}
      </Stack>
    </Box>
  )
}

export default TestSlugPage