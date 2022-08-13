// ** Styled Component Import
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** HashString
import { _jd64 } from '@core/utils/hashstring';



const DiceIndex = () => {

    const diceIds = Object.entries(JSON.parse(_jd64()));

    diceIds.forEach(([key, value]) => {
      console.log(`${key} ${value}`);
    });
            
        return (
                
            <>
            
            <ApexChartWrapper>

                <Grid container spacing={6}>
                    
                    <Grid item xs={12} md={4}>
                        <Stack>
                                <Typography variant="h5">Dice</Typography>
                                <Typography variant="body1">Roll to Victory</Typography>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={12} md={8}>
                    
                    { JSON.stringify(diceIds) }

                    </Grid>
                    
                    <Grid item xs={12}>
                        
                    </Grid>

                </Grid>

            </ApexChartWrapper>
            
            </>


            )
    
}

export default DiceIndex