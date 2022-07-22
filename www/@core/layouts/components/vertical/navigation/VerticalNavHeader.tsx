// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from '@core/context/settingsContext'

// ** Configs
import themeConfig from 'configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg
              width={64}
              height={64}
              version='1.1'
              viewBox='0 0 48 48'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <defs><clipPath id="A"><path d="M5.844 2H25v39.145H5.844zm0 0" clip-rule="nonzero"/></clipPath><clipPath id="B"><path d="M24 2h18.578v39.145H24zm0 0" clip-rule="nonzero"/></clipPath><path id="C" d="M9.596 41.96v1.258h.887v.887h1.773v1.258h.887v-1.258h-.887v-.887h-1.773V41.96zm.887 3.402v-.887h-.887v.887h.887v.887h1.773v-.887zm0-4.289v.887h1.773v.887h.887v-.887h-.887v-.887zm0 0"/><path id="D" d="M10.152 42.099v1.258h.887v.887h1.773v1.258h.887v-1.258h-.887v-.887h-1.773v-1.258zm.887 3.402v-.887h-.887v.887h.887v.887h1.773v-.887zm0-4.289v.887h1.773v.887h.887v-.887h-.887v-.887zm0 0"/><path id="E" d="M15.224 42.099v3.402h.887v.887h1.773v-.887h-1.773v-3.402zm.887-.887v.887h1.773v.887h.887v-.887h-.887v-.887zm2.66 4.289v-.887h-.887v.887zm0 0"/><path id="F" d="M21.183 42.099h1.773v3.402h.887v-3.402h-.887v-.887h-1.773zm0 0h-.887v3.402h.887v.887h1.773v-.887h-1.773zm0 0"/><path id="G" d="M26.254 42.099h1.773v1.258h.887v-1.258h-.887v-.887h-2.66v5.176h.887v-2.145h1.773v2.145h.887v-2.145h-.887v-.887h-1.773zm0 0"/></defs><path d="M28.832 22.551l-3.203 1.801c3.559.836 3.203-1.801 3.203-1.801m-6.027 1.801l-3.207-1.801s-.355 2.637 3.207 1.801m-4.02-22.231l.133.051c1.387 1.66 2.621 4.492 2.094 9.223 0 0-.02.363-.004.938.117 4.191 6.301 4.191 6.414 0l-.004-.937c-.531-4.777.73-7.621 2.133-9.273 0 0 1.078-1.379 2.973-2.121 0 0-2.805.141-4.824 1.66-1.125-.219-2.293-.336-3.484-.336a18.08 18.08 0 0 0-3.559.352C18.637.141 15.813 0 15.813 0c1.895.742 2.973 2.121 2.973 2.121" fill="#9155fd"/><g clip-path="url(#A)"><path fill="#9155fd" d="M20.953 37.023l-.223-.062-.629-.172-.469-.164-.266-.098-.273-.121c-.375-.16-.789-.383-1.211-.668-.207-.152-.43-.297-.633-.488l-.312-.285-.293-.316c-.383-.441-.738-.953-1.012-1.52-.281-.562-.516-1.168-.691-1.793l-.453-1.898-.363-1.895-.418-1.809-.129-.43-.062-.211-.074-.203-.145-.402-.16-.387-.082-.187-.09-.18-.18-.352-.195-.324-.195-.309-.414-.547c-.145-.164-.27-.332-.418-.461l-.395-.375-.363-.289c-.105-.094-.215-.16-.305-.219l-.23-.152-.191-.125.195.117.238.141.316.203.379.277c.133.102.266.23.418.359s.289.285.441.445c.16.156.293.348.449.539.078.094.145.195.215.305l.215.32.195.352.102.18.094.188.184.387.164.402.086.207.074.211.148.43.508 1.813.453 1.875.523 1.832c.195.59.445 1.148.727 1.656s.617.949.977 1.324l.273.273.285.234c.184.16.391.277.578.406.387.234.762.414 1.109.543l.246.098.238.074.41.125.633.141.227.051c.273.074.422.336.355.594a.48.48 0 0 1-.582.34zm.754 1.246l-.016-.008-.574-.988c.305-.016.57-.227.648-.531a.72.72 0 0 0-.504-.879c-.012-.004-.023-.008-.031-.008l-.227-.051-.172-.039-.391-.086c-.285-.855-.477-1.797-.5-2.812l1.543 1.199s-.711-6.035-3.914-8.117c0 0-4.512-3.16-4.273-6.52 0 0 1.898 2.281 3.797 2.16 0 0-4.172-2.996-3.805-6.117.305-2.613 4.352-7.668 3.633-12.625-6.512 2.852-11.07 9.406-11.07 17.035 0 8.43 5.562 15.543 13.176 17.805 2.496 2.313 5.012 3.375 5.188 3.449-.773-.449-2.508-2.867-2.508-2.867"/></g><g clip-path="url(#B)"><path fill="#393536" d="M37.938 20.859c-.09.059-.195.125-.301.219l-.363.289c-.129.109-.254.242-.398.375s-.27.297-.414.461c-.152.16-.273.355-.414.547-.074.094-.137.199-.199.309l-.195.324-.176.352-.09.18c-.031.063-.055.125-.082.188l-.164.387-.145.402-.07.203-.066.211-.125.43-.418 1.809-.367 1.895-.453 1.898c-.172.625-.41 1.23-.687 1.793a6.97 6.97 0 0 1-1.016 1.52l-.293.316-.312.285c-.199.191-.422.336-.629.488-.426.285-.836.508-1.215.668l-.273.121-.266.098-.469.164-.629.172-.223.063a.48.48 0 0 1-.582-.34c-.066-.258.086-.52.336-.59.008 0 .016-.004.023-.004l.223-.051.633-.141.414-.125.234-.074.25-.098c.348-.129.723-.309 1.109-.543.184-.129.391-.246.574-.406l.289-.234.273-.273a6.39 6.39 0 0 0 .977-1.324c.277-.508.527-1.066.723-1.656l.527-1.832.449-1.875.508-1.812.152-.43.074-.211.082-.207.168-.402.184-.387.09-.187.102-.18.199-.352.215-.32.215-.305.445-.539c.156-.16.289-.32.445-.445l.418-.359.379-.277c.109-.086.219-.148.313-.203l.238-.141.199-.117-.191.125-.234.152zm-6.43-18.012c-.719 4.957 3.328 10.012 3.633 12.625.367 3.121-3.805 6.117-3.805 6.117 1.898.121 3.797-2.16 3.797-2.16.238 3.359-4.273 6.52-4.273 6.52-3.203 2.082-3.914 8.117-3.914 8.117l1.543-1.199c-.023 1.016-.215 1.957-.5 2.816l-.379.082-.172.039-.227.051c-.008 0-.02.004-.031.008a.72.72 0 0 0-.504.879c.078.301.336.512.637.531-.184.355-.379.688-.578.996 0 0-1.742 2.43-2.512 2.871.148-.062 2.684-1.129 5.199-3.457 7.605-2.27 13.156-9.379 13.156-17.801 0-7.629-4.555-14.184-11.07-17.035"/></g><g fill="#f0f"><path d="M2.994 41.96h1.773v3.402h.887V41.96h-.887v-.887h-2.66v5.176h2.66v-.887H2.994zm4.185 4.289h.887v-5.176h-.887zm0 0"/><use xlinkHref="#C"/><path d="M14.668 41.96v3.402h.887v.887h1.773v-.887h-1.773V41.96zm.887-.887v.887h1.773v.887h.887v-.887h-.887v-.887zm2.66 4.289v-.887h-.887v.887zm2.412-3.402H22.4v3.402h.887V41.96H22.4v-.887h-1.773zm0 0h-.887v3.402h.887v.887H22.4v-.887h-1.773zm5.071 0h1.773v1.258h.887V41.96h-.887v-.887h-2.66v5.176h.887v-2.145h1.773v2.145h.887v-2.145h-.887v-.887h-1.773zm5.072 0h1.773v3.402h.887V41.96h-.887v-.887h-2.66v5.176h2.66v-.887H30.77zm4.184 3.402v.887h.887v-.887zm0 0"/><use xlinkHref="#C" x="27.776"/><path d="M42.443 41.073v5.176h.887v-2.145h1.773v2.145h.887v-5.176h-.887v2.145H43.33v-2.145zm0 0"/></g><g fill="#0ff"><path d="M3.55 42.099h1.773v3.402h.887v-3.402h-.887v-.887h-2.66v5.176h2.66v-.887H3.55zm4.185 4.289h.887v-5.176h-.887zm0 0"/><use xlinkHref="#D"/><use xlinkHref="#E"/><use xlinkHref="#F"/><use xlinkHref="#G"/><path d="M31.326 42.099h1.773v3.402h.887v-3.402h-.887v-.887h-2.66v5.176h2.66v-.887h-1.773zm4.184 3.402v.887h.887v-.887zm0 0"/><use xlinkHref="#D" x="27.776"/><path d="M42.999 41.212v5.176h.887v-2.145h1.773v2.145h.887v-5.176h-.887v2.145h-1.773v-2.145zm0 0"/></g><g fill="#3b1b72"><path d="M3.272 42.029h1.773v3.402h.887v-3.402h-.887v-.887h-2.66v5.176h2.66v-.887H3.272zm4.185 4.289h.887v-5.176h-.887zm0 0"/><use xlinkHref="#D" x="-0.278" y="-0.07"/><use xlinkHref="#E" x="-0.278" y="-0.07"/><use xlinkHref="#F" x="-0.278" y="-0.07"/><use xlinkHref="#G" x="-0.278" y="-0.07"/><path d="M31.048 42.029h1.773v3.402h.887v-3.402h-.887v-.887h-2.66v5.176h2.66v-.887h-1.773zm4.184 3.402v.887h.887v-.887zm0 0"/><use xlinkHref="#D" x="27.498" y="-0.07"/><path d="M42.721 41.142v5.176h.887v-2.145h1.773v2.145h.887v-5.176h-.887v2.145h-1.773v-2.145zm0 0"/></g>
            </svg>
            <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
