// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// ** Link
import Link from 'next/link'


// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
  })
  
  // Styled component for the trophy image
  const DiceImg = styled('img')({
    right: -10,
    bottom: 20,
    height: 98,
    position: 'absolute'
  })
  
  const DiceCard = () => {
    // ** Hook
    const theme = useTheme()
  
    const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
  
    return (
      <Card sx={{ position: 'relative' }}>
        <CardContent>
          <Typography variant='h6'>Dice! </Typography>
          <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
            
            Shake, Roll and Throw ?! We definitely need a better term.

          </Typography>
          <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
            Roll
          </Typography>
              <Link href="/games/dice">
                  <Button size='small' variant='contained'>
                  Play!
                  </Button>
              </Link>
          <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
          <DiceImg alt='slot' src='https://rareicon.com/md/term/d/dice/images/1/dice.gif'  />
        </CardContent>
      </Card>
    )
  }



export default DiceCard
