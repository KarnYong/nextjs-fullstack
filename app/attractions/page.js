"use client"
import React from 'react'
import { getData } from './data'
import { 
  Card, CardActions, CardContent, CardMedia, 
  Button, Typography, Grid 
} from '@mui/material'


export default async function page() {
  const data = await getData()
  return (
    <div>
      <Typography variant='h5'>Attractions</Typography>
      <Grid container spacing={1}>
        {data.map(attraction => (
          <Grid item key={attraction.id} xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={attraction.coverimage}
                title={attraction.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {attraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {attraction.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={`/attractions/${attraction.id}`}>
                  <Button size="small">Learn More</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
