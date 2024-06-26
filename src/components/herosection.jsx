import React from 'react'
import {Grid,Typography ,Button} from '@mui/material'
import Cake from '../imags/cake.jpg'

const herosection = () => {
  return (
    <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={6} lg={6} order={{xs:2, sm:1}}>
            <Typography variant='h3' color={'inherit'}>
                 Lorem ipsum molestias Lorem ipsum dolor sit amet..
            </Typography>
            <Typography variant='h6' color={'inherit'}>
                 Lorem ipsum dolor, sit amet, molestias.
            </Typography>
            <Button size="large"  variant="contained" sx={{borderRadius:5}}>order now</Button>
        </Grid>
        <Grid container item xs={12} sm={6} lg={6} justifyContent="center" order={{xs:1, sm:2}}>
            <Typography>
                  <img src={Cake} height={400}/>
            </Typography>
        </Grid>
    </Grid>
  )
}

export default herosection