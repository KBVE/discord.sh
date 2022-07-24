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
const SlotImg = styled('img')({
  right: 45,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const SlotsCard = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Discord.sh Slots! </Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Spin 2 Win on the daily slots machine!
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          Tons of prizes for you to grab!
        </Typography>
            <Link href="/g/slots">
                <Button size='small' variant='contained'>
                Play!
                </Button>
            </Link>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <SlotImg alt='slot' src='https://rareicon.com/md/term/s/slots/images/1/slots_machine.png'  />
      </CardContent>
    </Card>
  )
}

export default SlotsCard
