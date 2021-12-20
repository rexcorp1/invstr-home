import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, Container, MenuItem, Typography, Button } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "./navbar.css"

const pages = ['Products', 'Pricing', 'Blog'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }


  return (
    <>
      <AppBar position="relative" style={{ backgroundColor: `#fff`, paddingBottom: 16, paddingTop: 16 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link
                to="/"
              >
              <StaticImage
                src="../../images/assets/LandX-logo.webp"
                width={100}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="LandX Platform Equity Crowdfunding Indonesia yang akan membantu investasi bisnis jangka panjang anda"
                style={{ marginRight: `6rem` }}
              />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box className="links" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <AnchorLink to='/#why-landx'>Mengapa LandX</AnchorLink>
                <AnchorLink to='/#ongoing-projects'>Proyek</AnchorLink>
                <AnchorLink to='/#how-it-works'>Cara Kerja</AnchorLink>
                <Link to='/contact.html'>Kontak</Link>
                <Link to='/blog'>Blog</Link>
                <Link
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  onMouseOver={handleClick}
                >
                  Perusahaan
                </Link>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  <MenuItem onClick={handleClose}>Karir</MenuItem>
                  <MenuItem onClick={handleClose}>Syarat & Ketentuan</MenuItem>
                  <MenuItem onClick={handleClose}>Kebijakan Privasi</MenuItem>
                  <MenuItem onClick={handleClose}>Service Level Agreement</MenuItem>
                  <MenuItem onClick={handleClose}>Kebijakan ISMS</MenuItem>
                  <MenuItem onClick={handleClose}>Mitigasi Risiko</MenuItem>
                  <MenuItem onClick={handleClose}>FAQ</MenuItem>
                </Menu>
            </Box>
            <Button>Pendaftaran Perusahaan</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
