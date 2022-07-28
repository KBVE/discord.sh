import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// ** Styled Component
import DatePickerWrapper from '@core/styles/libs/react-datepicker'


// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Advertisement Cards
import AdvertisementCard from 'views/dashboard/AdvertisementBannerCard'

// ** Vote Form Layout
import FormLayoutsVote from 'views/form-layouts/FormLayoutsVote'


const VoteIndex = () => (


    <DatePickerWrapper>

        <Grid container spacing={6}>
            
            <Grid item xs={12} md={4}>
                <Stack>
                        <Typography variant="h5">Vote</Typography>
                        <Typography variant="body1">Check back later, WIP</Typography>
                </Stack>
            </Grid>
            
            <Grid item xs={12} md={8}>
                <AdvertisementCard />
            </Grid>
            
            <Grid item xs={12}>
                <FormLayoutsVote />
            </Grid>

        </Grid>

    </DatePickerWrapper>
 
)

export default VoteIndex