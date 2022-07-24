import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Advertisement Cards
import AdvertisementCard from 'views/dashboard/AdvertisementBannerCard'

const GuildIndex = () => (


    <ApexChartWrapper>

        <Grid container spacing={6}>
            
            <Grid item xs={12} md={4}>
                <Stack>
                        <Typography variant="h5">Guilds</Typography>
                        <Typography variant="body1">Check back later, WIP</Typography>
                </Stack>
            </Grid>
            
            <Grid item xs={12} md={8}>
                <AdvertisementCard />
            </Grid>
            
            <Grid item xs={12}>
                
            </Grid>

        </Grid>

    </ApexChartWrapper>
 
)

export default GuildIndex