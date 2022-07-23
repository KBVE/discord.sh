// ** Link
import Link from 'next/link'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** MUI Icons
import GithubIcon from '@mui/icons-material/GitHub'

const NavMenuFooter = () => {
  return (
    <Paper variant="outlined" square sx={{ bgcolor: 'unset', m: 1 }}>
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        m={2}
        sx={{ flexGrow: 1 }}
      >
        <Stack>
          <Typography variant="body1">Testing</Typography>
        </Stack>
        <Divider flexItem />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Link href="https://kbve.com">
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  width: '100%',
                }}
              >
                ◈ KBVE
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="https://github.com/kbve/discord.sh">
              <Button
                variant="contained"
                startIcon={<GithubIcon />}
                sx={{ textTransform: 'none' }}
              >
                GitHub
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  )
}

export default NavMenuFooter