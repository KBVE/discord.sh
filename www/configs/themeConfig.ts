// ** MUI Imports
import { PaletteMode } from '@mui/material'

// ** Types
import { ContentWidth } from '../@core/layouts/types'

type ThemeConfig = {
  mode: PaletteMode
  favicon: string
  svglogo: string
  templateDescription: string
  templateName: string
  templateKeywords: string
  templateFooter: string
  routingLoader: boolean
  disableRipple: boolean
  navigationSize: number
  menuTextTruncate: boolean
  contentWidth: ContentWidth
  responsiveFontSizes: boolean
}

const themeConfig: ThemeConfig = {
  // ** [1] Layout Configs

  // ** [1][A] Layout Configs -> Cosmetics
  favicon: '/static/img/logo/favicon.ico' /* App Favicon */,
  svglogo: '' /* App SVG */,
  mode: 'dark' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,

  // ** [1][B] Layout Configs -> Template Data
  templateName: 'Discord.sh' /* App Name */,
  templateDescription: 'Discord.sh Bot and Topsite' /* App Description */,
  templateKeywords: 'Discord.sh, Discord Bots, Discord' /* Template Keywords */,
  templateFooter: ' based upon Materio. Discord.sh is not affiliated with Discord.' /* Tempalte Footer */,

  // ** Right Hand Button
  
  
  // ** Routing Configs
  routingLoader: true /* true | false */,

  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */
}

export default themeConfig
