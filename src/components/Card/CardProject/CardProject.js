import React from 'react'
import { Grid, Card, Chip, CardContent, CardMedia, LinearProgress, Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './CardProject.scss'

const CardProject = ({ settings }) => {
  return (
    <>
      <Slider {...settings}>
        <Grid item xs={12} md={4}>
          <Card className="card-project">
            <CardMedia
              component="img"
              height="194"
              image="/images/1.webp"
              alt="Kapan Tongkang"
            />
            <CardContent>
              <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={3} className='btn-container-buy'>
                  <Button variant="contained" className="btn-buy">
                    <span className='f-buy'>BELI</span>
                  </Button>
                </Grid>
              </Grid>

              <div className="card-code">PMBB</div>
              <h2 className="card-title">Padang Merdeka - PT Merdeka Bisnis Bersama</h2>
              <Chip label="Restaurant" color="success" variant="outlined" className="chip-text" />

              <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={9} className='card-price'>
                  Rp 3.750.000.000
                </Grid>
                <Grid item xs={3} className='card-price'>
                  0
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9} className='card-text-detail'>
                  dari Rp 3.750.000.000 Total Pendanaan
                </Grid>
                <Grid item xs={3} className='card-text-detail'>
                  Hari Lagi
                </Grid>
              </Grid>

              <LinearProgress variant="determinate" value={50} />

              <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={6} className='card-text-detail'>
                  <span>Harga Per Lot</span>
                </Grid>
                <Grid item xs={6} className='card-text-detail'>
                  <span>Jumlah Lot</span>
                </Grid>
              </Grid>

              <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={6} className='card-title'>
                  <span>Rp. 1.000.000</span>
                </Grid>
                <Grid item xs={6} className='card-title'>
                  <span>3750</span>
                </Grid>
              </Grid>

              <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={6} className='card-text-detail'>
                  <span>Periode Dividen</span>
                </Grid>
                <Grid item xs={6} className='card-text-detail'>
                  <span>Estimasi Dividen</span>
                </Grid>
              </Grid>

              <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={6} className='card-title'>
                  <span>Per 3 bulan</span>
                </Grid>
                <Grid item xs={6}>
                  <span className='card-title'>10-20%</span> <span className='card-text-detail-2'>Per Tahun</span>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Slider>
    </>
  )
}

export default CardProject
