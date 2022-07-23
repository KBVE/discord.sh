// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import {
  styled

  // useTheme
} from '@mui/material/styles'

const StyledLink = styled('a')({
  backgroundImage: `url(https://discord.sh/static/img/logo/discordsh_compressed_logo.svg)`,
  content: '""',
  minHeight: '96px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: "contain",
  backgroundPosition: "center",
  flexGrow: 1,
})

const VerticalNavHeader = () => (
  <Box sx={{
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    p: 2
  }}>
    <Avatar
      sx={{
        bgcolor: 'white',
        minWidth: '112px',
        minHeight: '112px',
        p: 4,
      }}>
      <Link href='/' passHref>
        <StyledLink />
      </Link>
    </Avatar>
  </Box>
)

export default VerticalNavHeader
