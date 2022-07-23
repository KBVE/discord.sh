// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const StatisticsCard = () => {
  return (
    <Card>
      <CardHeader
        title='Advertisement'
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          <iframe
          data-aa='2048992'
          src='//acceptable.a-ads.com/2048992'
          style={{
            border: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}></iframe>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
