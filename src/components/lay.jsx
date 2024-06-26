import React from 'react'
import {Grid} from '@mui/material'

const lay = () => {
  return (
    <div>
      <Grid container>
            <Grid item xl={12} md={12} sm={12} xs={12}> <h1 className='bg-red-600 h-8 fixed w-full'>navbar</h1></Grid>
           <Grid item xl={3} md={3} sm={3} xs={12}><h1 className='bg-pink-600 h-screen'>sidebar</h1></Grid>
           <Grid item xl={9} md={9} sm={9} xs={12}><h1 className='bg-yellow-600 h-screen'>section</h1></Grid>
           <Grid item lg={12} md={12}  sm={12}  xs={12}><h1 className='bg-black '>footer</h1></Grid>
      </Grid>

    </div>
  )
}

export default lay