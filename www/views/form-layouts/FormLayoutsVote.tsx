// ** React Imports
import React from 'react';


// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

import CardContent from '@mui/material/CardContent'

import FormControlLabel from '@mui/material/FormControlLabel'


type VoteFormData = {
  gId?: string;
  username?: string;
};


// Styled component for the form
const Form = styled('form')(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`
}))

const FormLayoutsAlignment = ({ gId, username }: VoteFormData ) => {




  return (
    <Card>
      <CardHeader title='Daily Vote @ Guild' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent sx={{ minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='h5'>Guild</Typography>
            </Grid>

            <Grid item xs={12}>
              
              <TextField fullWidth label='Guild ID' name='guildId' placeholder={gId} />
            
            </Grid>
            
            <Grid item xs={12}>

              <TextField fullWidth label='Username' name='username' placeholder={username} />

            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                label='Remember me'
                control={<Checkbox name='form-layouts-alignment-checkbox' />}
                sx={{ '& .MuiButtonBase-root': { paddingTop: 0, paddingBottom: 0 } }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button size='large' type='submit' variant='contained' sx={{ width: '100%' }}>
                Vote
              </Button>
            </Grid>

          </Grid>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsAlignment
 