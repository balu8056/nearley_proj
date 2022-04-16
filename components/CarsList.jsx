import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function CarsList({ cars }) {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {
            cars.map((car, index) => (
              <Grid key={index} item sx={{ marginX: 'auto' }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      width="200"
                      image={car.imageURL}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {car.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Brand</b>: {car.brand} <br />
                        <b>Vehicle type</b>: {car.vehicleType} <br />
                        <b>Fuel type</b>: {car.fuelType}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}
