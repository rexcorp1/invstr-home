import * as React from "react"
import { Link } from "gatsby"
import { Container, Grid, Typography, Card, Chip, CardContent, CardMedia, LinearProgress } from '@mui/material';
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import './index.scss';

export const CardWhyLandx = ({ title, content, logo }) => {
  return (
    <Grid item md={4} >
      <Card className='container-card-icon'>
        <div>
          <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt="Star Icon" className="card-icon" />
          </div>
          <CardContent>
            <h5 className="title-icon">
              {title}
            </h5>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  )
}


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <header class="homepage">
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Grid container>
              <Grid item>
                <Typography variant="h1" className="heroTitle">
                  Investasi dan Miliki Bisnis Menguntungkan Mulai dari Rp 1.000.000
                </Typography>
                <p className='heroDescription'>
                  Investasi secara patungan online ke perusahaan-perusahaan UMKM di Indonesia pilihan kamu melalui platform securities crowdfunding LandX.
                </p>
              </Grid>
              <Grid item>
                <img src="./images/logo_OJK.webp" alt="logo OJK" />
              </Grid>
              <Grid item>
                <Link to='https://play.google.com/store/apps/details?id=store.numoney.landxapp' target='_blank'>
                  <img src="./images/PlayStore.webp" alt="PlayStore" className='playstoreLogo' />
                </Link>
                <Link to='https://apps.apple.com/id/app/landx/id1453823676' target='_blank'>
                  <img src="./images/AppStore.webp" alt="AppStore" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y03A0VgY_ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Grid>
        </Grid>
      </Container>
    </header>

    <main>
      <section>
        <Container>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', margin: '40px 0' }}>
            <Grid item>
              <Typography variant='h4' sx={{ marginBottom: '5px' }}>71.674</Typography>
              <p>Investor Terdaftar</p>
            </Grid>
            <Grid item>
              <Typography variant='h4' sx={{ marginBottom: '5px' }}>26</Typography>
              <p>Perusahaan Penerbit</p>
            </Grid>
            <Grid item>
              <Typography variant='h4' sx={{ marginBottom: '5px' }}>153,18 Miliar</Typography>
              <p>Investasi Tersalurkan</p>
            </Grid>
            <Grid item>
              <Typography variant='h4' sx={{ marginBottom: '5px' }}>2,48 Miliar</Typography>
              <p>Dividen Dibagikan</p>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section style={{ backgroundColor: '#f8f8f8', padding: '30px', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <h2 className='title-section'>
                Mengapa Memilih LandX
              </h2>
              <hr className='divider' />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <CardWhyLandx logo='./images/star.webp' title='Bisnis-bisnis Terbaik' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
            <CardWhyLandx logo='./images/time.webp' title='Investasi Bagi Hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
            <CardWhyLandx logo='./images/jewely.webp' title='Investasi Aman untuk Pemula' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
          </Grid>
        </Container>
      </section>

      <section style={{ padding: '30px' }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item>
            <h2 className='title-section'>
              Pendanaan yang Sedang Berlangsung
            </h2>
            <hr className='divider' />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="/images/1.webp"
                alt="Kapan Tongkang"
              />
              <CardContent>
                <div>PMBB</div>
                <h2>Padang Merdeka - PT Merdeka Bisnis Bersama</h2>
                <Chip label="Restaurant" color="success" />

                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={6}>
                    <span>Rp 3.750.000.000 dari Rp 3.750.000.000 Total Pendanaan</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>0 Hari Lagi</span>
                  </Grid>
                </Grid>

                <LinearProgress variant="determinate" value={50} />

                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={6}>
                    <span>Harga Per Lot</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>Jumlah Lot</span>
                  </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={6}>
                    <span>Rp. 1.000.000</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>3750</span>
                  </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={6}>
                    <span>Periode Dividen</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>Estimasi Dividen</span>
                  </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={6}>
                    <span>Per 3 bulan</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>10-20% Per Tahun</span>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </main>

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout >
)

export default IndexPage
