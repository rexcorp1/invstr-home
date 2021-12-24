import * as React from 'react';
import { Link } from 'gatsby';
import { AppBar, Container, Toolbar, Button, ListItemButton, ListItemText, Collapse, List, Box, MenuItem, Typography, Stack, Paper, Popper, MenuList, Grow, ClickAwayListener } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import "./navbar.scss"

const ResponsiveAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const linksName = [
    ['#why-landx', 'Mengapa Landx'],
    ['#ongoing-projects', 'Proyek'],
    ['#how-it-works', 'Cara Kerja'],
    ['https://landx.id/contact.html', 'Kontak'],
    ['https://landx.id/blog/', 'Blog']
  ]


  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
        <Container>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0', paddingRight: '0' }}>
            <img src="/images/landx-logo.webp" alt="logo landx" style={{ marginBottom: '0' }} />
            <Box>
              <Box sx={{ display: 'flex' }}>
                {linksName && linksName.map(linkName => (
                  <MenuItem key={linkName[1]}>
                    <Typography textAlign="center">
                      <Link to={linkName[0]} style={{ textDecoration: 'none', color: '#000' }}>{linkName[1]}</Link>
                    </Typography>
                  </MenuItem>
                ))}

                <Stack direction="row" spacing={2}>
                  <div>
                    <MenuItem onClick={handleToggle}>
                      <Typography textAlign="center"
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                      >
                        Perusahaan
                      </Typography>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </MenuItem>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === 'bottom-start' ? 'left top' : 'left bottom',
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem onClick={handleClose}>Karir</MenuItem>
                                <MenuItem onClick={handleClose}>Syarat & Ketentuan</MenuItem>
                                <MenuItem onClick={handleClose}>Kebijakan Privasi</MenuItem>
                                <MenuItem onClick={handleClose}>Service Level Agreement</MenuItem>
                                <MenuItem onClick={handleClose}>Kebijakan ISMS</MenuItem>
                                <MenuItem onClick={handleClose}>Mitigasi Resiko</MenuItem>
                                <MenuItem onClick={handleClose}>FAQ</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Stack>

              </Box>
            </Box>
            <Button color="success">PENDAFTARAN PERUSAHAAN</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
