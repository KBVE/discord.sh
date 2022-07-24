// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import ControllerClassic from 'mdi-material-ui/ControllerClassic'
import ChartBoxOutline from 'mdi-material-ui/ChartBoxOutline'
import CashMultiple from 'mdi-material-ui/CashMultiple'
import Server from 'mdi-material-ui/Server'
import ShapeOutline from 'mdi-material-ui/ShapeOutline'
import RobotLoveOutline from 'mdi-material-ui/RobotLoveOutline'

// ** Type import
import { VerticalNavItemsType } from '@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Shop',
      icon: CashMultiple,
      path: '/shop'
    },
    {
      title: 'Games',
      icon: ControllerClassic,
      path: '/games'
    },
    {
      sectionTitle: 'Guilds'
    },
    {
      title: 'Guilds',
      icon: Server,
      path: '/guilds',
      openInNewTab: true
    },
    {
      title: 'My Guild',
      icon: ChartBoxOutline,
      path: '/account'
    },
    {
      title: 'Categories',
      icon: ShapeOutline,
      path: '/categories',
      openInNewTab: true
    },
    {
      sectionTitle: 'Bots'
    },
    {
      title: 'Top Bots',
      icon: RobotLoveOutline,
      path: '/bots',
      openInNewTab: true
    },
  ]
}

export default navigation
