import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-scroll";



const pages = ['Inicio', 'Estudios', 'Experiencia', 'Portafolio'];
const settings = ['InicioPage', 'Account', 'Dashboard', 'Logout'];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="full">
        <Toolbar disableGutters>
       
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              
              <MenuIcon />
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

            <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="inicio">
                <Typography textAlign="center">Perfil</Typography>
                  </Link>                  
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="estudios">
                <Typography textAlign="center">Estudios</Typography>
                  </Link>                  
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="experiencia">
                <Typography textAlign="center">Experiencia</Typography>
                  </Link>                  
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="portafolio">
                <Typography textAlign="center">Portafolio</Typography>
                  </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="contacto">
                <Typography textAlign="center">Contacto</Typography>
                  </Link>                  
                </MenuItem>  
               </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'system-ui',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LANDING PAGE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            
          <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="inicio">
                <Typography textAlign="center">Perfil</Typography>
                  </Link>                  
                </MenuItem>  

                <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="estudios">
                <Typography textAlign="center">Estudios</Typography>
                  </Link>                  
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="experiencia">
                <Typography textAlign="center">Experiencia</Typography>
                  </Link>                  
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="portafolio">
                <Typography textAlign="center">Portafolio</Typography>
                  </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                <Link activeClass='active' smooth spy to="contacto">
                <Typography textAlign="center">Contacto</Typography>
                  </Link>                  
                </MenuItem>  
               
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C4E03AQGVdEEALeRIvg/profile-displayphoto-shrink_200_200/0/1650847507398?e=1669852800&v=beta&t=PZTOz1krNLpi2x_j6s52MhsW9ZJi4T5-A74CPhiehYk" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
