// ** MUI Imports
import { Theme } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'

// ** Core
import LoadingComponent from './components/LoadingComponent'

interface Props {
  loading: boolean
}

const LoadingLayout = ({ loading }: Props) => {

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */

  return (
    <Backdrop
      open={loading}
      transitionDuration={{
        appear: 0,
        enter: 0,
        exit: 320
      }}
      sx={{
        zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
        bgcolor: (theme: Theme) => theme.palette.background.default
      }}
    >
      <LoadingComponent />
    </Backdrop>
  )
}

export default LoadingLayout
