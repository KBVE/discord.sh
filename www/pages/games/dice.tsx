import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** MUI Imports
import Grid from '@mui/material/Grid'

const DiceIndex = () => (


    <ApexChartWrapper>

        <Grid container spacing={6}>
            
            <Grid item xs={12} md={4}>
                <Stack>
                        <Typography variant="h5">Dice</Typography>
                        <Typography variant="body1">Roll to Victory</Typography>
                </Stack>
            </Grid>
            
            <Grid item xs={12} md={8}>
                
            </Grid>
            
            <Grid item xs={12}>
                
            </Grid>

        </Grid>

    </ApexChartWrapper>
 
)

export default DiceIndex