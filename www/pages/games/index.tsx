import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Advertisement Cards
import AdvertisementCard from 'views/dashboard/AdvertisementBannerCard'


// ** Game Cards
import SlotsCard from 'views/dashboard/games/slots/SlotsCard'
import RouletteCard from 'views/dashboard/games/roulette/RouletteCard'
import DiceCard from 'views/dashboard/games/dice/DiceCard'


const GIndex = () => (


  <ApexChartWrapper>

    <Grid container spacing={6}>

      <Grid item xs={12} md={4}>
        <Stack>
          <Typography variant="h5">Gambles</Typography>
          <Typography variant="body1">Check back later, WIP</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={8}>
        <AdvertisementCard />
      </Grid>

      <Grid item xs={12} md={4}>
        <SlotsCard />
      </Grid>

      <Grid item xs={12} md={4}>
        <RouletteCard />
      </Grid>

      <Grid item xs={12} md={4}>
        <DiceCard />
      </Grid>

      <Grid item xs={12}>

      </Grid>

    </Grid>

  </ApexChartWrapper>

)

export default GIndex