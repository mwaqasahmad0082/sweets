import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import Stack from '@mui/material/Stack'

const cakesection = () => {
  return (
    <div>
      <Typography variant="h4" mt={4} mb={4}>
        cakes-
      </Typography>

       <Stack direction="row" justifyContent="space-evenly" sx={{flexWrap:"wrap"}}>
       <Card sx={{  width:300, mb:1}}>
        <CardMedia
          sx={{ height: 250 }}
          image="src/imags/cake2.jpg"
          title="Cake Image"
        />
        <CardContent>
          <Typography variant="h5">Cake Name</Typography>
        </CardContent>
      </Card>

      <Card sx={{  width:300, mb:1}}>
        <CardMedia
          sx={{ height: 250 }}
          image="src/imags/cake4.jpg"
          title="Cake Image"
        />
        <CardContent>
          <Typography variant="h5">Cake Name</Typography>
        </CardContent>
      </Card>

      <Card sx={{ width:300, mb:1}}>
        <CardMedia
          sx={{ height: 250 }}
          image="src/imags/cake5.jpg"
          title="Cake Image"
        />
        <CardContent>
          <Typography variant="h5">Cake Name</Typography>
        </CardContent>
      </Card>

       </Stack>

{/* +++++++++++++++++++++++second section */}

<Stack direction="row" justifyContent="space-evenly" sx={{flexWrap:"wrap"}}>
       <Card sx={{  width:300, mb:1}}>
        <CardMedia
          sx={{ height: 250 }}
          image="src/imags/cake6.jpg"
          title="Cake Image"
        />
        <CardContent>
          <Typography variant="h5">Cake Name</Typography>
        </CardContent>
      </Card>

      <Card sx={{  width:300, mb:1}}>
        <CardMedia
          sx={{ height: 250 }}
          image="src/imags/cake7.jpg"
          title="Cake Image"
        />
        <CardContent>
          <Typography variant="h5">Cake Name</Typography>
        </CardContent>
      </Card>

      <Card sx={{ width:300, mb:1}}>
        <CardMedia
          sx={{ height: 250 }}
          image="src/imags/cake8.jpg"
          title="Cake Image"
        />
        <CardContent>
          <Typography variant="h5">Cake Name</Typography>
        </CardContent>
      </Card>

       </Stack>



     
    </div>
  );
};

export default cakesection;