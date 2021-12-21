import * as React from 'react';
import { Box, Typography, Link, Container, Grid, MenuList, MenuItem } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "./footer.scss";

const Footer = () => {

  return (
    <Box className="footer-background">
        <Box style={{ position:`relative` }}>
            <Container maxWidth="lg" className="footer-CTA-move">
                <Box className="footer-CTA-background">
                    <Typography variant="h2" color="primary" className="footer-font">
                        Kini memiliki bisnis dan properti jadi jauh lebih mudah.
                        <br/>
                        Unduh aplikasi LandX sekarang!
                    </Typography>
                    <Grid md={12} xs={12} style={{ paddingBottom:25 }}>
                        <Link>
                            <StaticImage
                                src="../../assets/images/icons/LandX-PlayStore.webp"
                                height={130}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda"
                            />
                        </Link>
                        
                        <Link>
                            <StaticImage
                                src="../../assets/images/icons/LandX-AppStore.webp"
                                height={130}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda"
                            />
                        </Link>        
                    </Grid>
                </Box>
            </Container>
        </Box>

        <Container maxWidth="lg" style={{ textAlignLast:`center`, paddingTop:`11rem`, paddingBottom:`3rem` }} >
            <Typography className="footer-fcolor" display="block">
                BERIZIN & DIAWASI OLEH
            </Typography>

            <StaticImage
                src="../../assets/images/icons/LandX-OJK.webp"
                height={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda"
                style= {{ marginBottom:`3rem` }}
            />
            <hr/>

            <Grid container spacing={2} style={{ marginTop:`5rem`, marginBottom:`4rem`, textAlign:`center` }}>
                <Grid xs={12} md={4}>
                    <Typography className="footer-fcolor" display="block">
                        TELAH TERDAFTAR OLEH KEMENTRIAN KOMUNIKASI DAN INFORMATIKA
                    </Typography>
                    <StaticImage
                        src="../../assets/images/icons/LandX-Kemkominfo.webp"
                        height={300}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="LandX TELAH TERDAFTAR OLEH KEMENTRIAN KOMUNIKASI DAN INFORMATIKA sehingga informasi dan investasi anda menjadi lebih aman"
                        style= {{ marginBottom:`3rem` }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography className="footer-fcolor" display="block">
                        DIDUKUNG OLEH
                    </Typography>
                    <StaticImage
                        src="../../assets/images/icons/LandX-ISO.webp"
                        height={300}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="LandX telah memilki sertifikasi ISO 27001 sehingga investasi anda melalui equity crowdfunding menjadi lebih mudah"
                        style= {{ marginBottom:`3rem` }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography className="footer-fcolor" display="block">
                        MEMBER OF
                    </Typography>
                    <StaticImage
                        src="../../assets/images/icons/LandX-ALUDI.webp"
                        height={300}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Landx merupakan salah satu board member dari Asosiasi Layanan Urun Dana Indonesia (ALUDI) yang ditujunjuk OJK untuk bertugas menjaga kestabilan ekosistem layanan urun dana atau equity crowdfunding di Indonesia"
                        style= {{ marginBottom:`3rem` }}
                    />
                </Grid>
            </Grid>
            <hr/>

            <Grid container spacing={2} style={{ textAlignLast:`left`, marginBottom:`3rem` }}>
                <Grid xs={12} md={6} style={{ paddingLeft:`1rem`, paddingRight:`1rem` }}>
                    <Typography className="footer-fcolor" display="block" style={{ marginTop:`3rem`, marginBottom:`2rem` }}>
                        Disclaimer
                    </Typography>
                    <Typography style={{ color:`#5e798d` }} display="block">
                        PT Numex Teknologi Indonesia (“LandX” atau “Penyelenggara”) hadir dalam rangka mendukung program pemerintah di bidang perumahan dengan mengembangkan bisnis layanan urun dana bersama, dengan mempertemukan Pemodal dan pihak pengembang properti (“Penerbit”) (selanjutnya Pemodal dan Penerbit disebut bersama-sama sebagai “Pengguna”). Pada layanan urun dana ini, timbulnya hubungan perdata terjadi apabila Pemodal sepakat untuk membeli saham yang ditawarkan oleh Penerbit, sehingga segala risiko yang timbul dari hubungan tersebut akan menjadi tanggung jawab masing-masing pihak. Risiko yang timbul dari hak sebagai Pemodal untuk menerima dividen dari Penerbit merupakan risiko yang wajib ditanggung oleh Pemodal sesuai kebijakan dividen Penerbit. LandX hanya bertindak sebagai layanan urun dana yang mempertemukan antara Pemodal dengan Penerbit, dan tidak bertindak sebagai pelaku usaha yang menjalankan usaha untuk mengumpulkan dana terkait atau pengelola investasi (Penerbit). Sesuai dengan Pasal 23 Peraturan Otoritas Jasa Keuangan No. 37 Tahun 2018 tentang Layanan Urun Dana melalui Penawaran Saham Berbasis Teknologi Informasi atau Equity Crowdfunding (“POJK 37/2018”), kami menyatakan bahwa:
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} style={{ paddingLeft:`1rem`, marginTop:`6.5rem` }}>
                    <Typography style={{ color:`#5e798d` }} display="block">
                        a.  OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.
                        <br/> <br/>
                        b.  INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.
                        <br/> <br/>
                        c.  PENERBIT SAHAM DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.
                    </Typography>
                </Grid>
            </Grid>
            <hr/>

            <Grid container spacing={2} style={{ marginTop:`3rem` }}>
                <Grid xs={12} md={3} className="footer-menu-one">
                    <MenuList>
                        <MenuItem>
                            <AnchorLink to='/#why-landx'>Mengapa LandX</AnchorLink>
                        </MenuItem>
                        <MenuItem>
                            <AnchorLink to='/#ongoing-projects'>Proyek</AnchorLink>
                        </MenuItem>
                        <MenuItem>
                            <AnchorLink to='/#how-it-works'>Cara Kerja</AnchorLink>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/contact'>Kontak</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='https://landx.id/blog/'>Blog</Link>
                        </MenuItem>
                    </MenuList>
                </Grid>

                <Grid xs={12} md={3} className="footer-menu-two">
                    <Typography color="secondary" className="footer-menu-title">Perusahaan</Typography>
                    <MenuList>
                        <MenuItem>
                            <Link to='/blog/jobs-at-landx/'>Karir</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/syarat-dan-ketentuan'>Syarat & Ketentuan</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/privacy-policy'>Kebijakan Privasi</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/service-level-agreement'>Service Level Agreement</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/kebijakan-isms'>Kebijakan ISMS</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/mitigasi-risiko'>Mitigasi Risiko</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='https://landx.id/blog/faq-landx/'>FAQ</Link>
                        </MenuItem>
                    </MenuList>
                </Grid>
                <Grid xs={12} md={6} style={{ textAlignLast:`left`}}>
                    <Link className="footer-icon-link">
                        <StaticImage
                            src="../../assets/images/icons/LandX-Linkedin.svg"
                            height={32}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda"
                        />
                    </Link>
                    <Link className="footer-icon-link">
                        <StaticImage
                            src="../../assets/images/icons/LandX-Facebook.svg"
                            height={32}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda"
                        />
                    </Link>
                    <Link className="footer-icon-link">
                        <StaticImage
                            src="../../assets/images/icons/LandX-Instagram.svg"
                            height={32}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda"
                        />
                    </Link>
                    <Typography style={{ color:`#5e798d`, textAlignLast:`left`, marginTop:`2rem` }} display="block">
                        © 2020 LandX Indonesia. All Rights Reserved.
                    </Typography>   
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
}

export default Footer;