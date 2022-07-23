// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import {
  styled

  // useTheme
} from '@mui/material/styles'

// import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from '@core/context/settingsContext'

// ** Configs
// import themeConfig from 'configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

// const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
//   fontWeight: 600,
//   lineHeight: 'normal',
//   textTransform: 'uppercase',
//   color: theme.palette.text.primary,
//   transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
// }))

const StyledLink = styled('a')({
  backgroundImage: `url(https://discord.sh/static/img/logo/discordsh_compressed_logo.svg)`,
  content: '""',
  minHeight: '96px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: "contain",
  backgroundPosition: "center",
  flexGrow: 1,
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  // const theme = useTheme()

  return (
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
        {/* <MenuHeaderWrapper className='nav-header' sx={{ pb: 4, pt: 4 }}>
        {userVerticalNavMenuBranding ? (
          userVerticalNavMenuBranding(props)
        ) : (
        )}
      </MenuHeaderWrapper> */}
      </Avatar>
    </Box>
  )
}

export default VerticalNavHeader
