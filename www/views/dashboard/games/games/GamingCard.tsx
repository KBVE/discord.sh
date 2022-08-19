// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const GamingCard = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Gaming</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Check Back Later, WIP
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          We got a ton of prizes! But who are they for?!
        </Typography>
        <Button size='small' variant='contained'> Play Today's Game   </Button>
        
       {/*  
       
        Rebuilding this card for the Gaming section. I will take any ideas here for them. 
        https://github.com/KBVE/discord.sh/issues/6
        
       */}

        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default GamingCard
