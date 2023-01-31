import React ,{ useState,useEffect}from 'react'
import {BrowserRouter as Router, Link } from "react-router-dom";
import AllRoutes from './AllRoutes';
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import '../logo.css'
import { useTheme,useThemeUpdate } from './ThemeContext';

const pages = ['products', 'contact', 'about'];
const settings = ['profile', 'order', 'cart','login','logout'];

function NavigationPanel(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // var user=sessionStorage.getItem('user');
  const [userLocal,setUserLocal] = useState(props.cb)
const toggleTheme=useThemeUpdate();
const darkTheme=useTheme();
 const [login,setLogin]=useState(false)

const themeStyles={
  backgroundColor:darkTheme ?'rgba(10, 0, 0)':'rgba(250, 250, 250)',
  color:darkTheme?'rgba(250, 250, 250)':'rgba(0, 0, 0)',
  fontWeight:600,
  // padding:'2rem',
  // margin:'2rem',
}
// props.onChange(user);









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
    <AppBar position="static" style={themeStyles}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {/* <Box
         
          component="img"
          href="/"
          sx={{
            width:200,
            height:155,
            letterSpacing: '.1rem',
            color: 'inherit',
         textDecoration: 'none',

          }}
alt="logonotfound"
src="../assets/img/logo.png"
          /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
        
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 > E X P E D I T E</h3>
    </div>
  </div>
</div>
         
          </Typography>

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
              style={themeStyles}
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
              {/* mobile view */}
              {pages.map((page) => (
                <MenuItem key={page}  onClick={handleCloseNavMenu}>
                <Link to={page} style={{textDecoration: 'none'}}>
                <Typography  textAlign="center">{page}</Typography>
                </Link>  
                
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* desktop view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,id) => (
             <Link to={page} key={id}>

              <Button
                key={page}
                onClick={handleCloseNavMenu}
                style={themeStyles}
                
              >
             {page}
             
              </Button>
              </Link>
            ))}
          </Box>
         <div className='p-5'>
         {darkTheme? <DarkModeIcon  onClick={toggleTheme} />:<LightModeIcon onClick={toggleTheme}/>}

         </div>
  
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../assets/img/avatar.png" />
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
            {/* avatar  dropdown */}
              {settings.map((setting,id) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={setting} style={{  textDecoration: 'none'}}>
                  <Typography textAlign="center">{setting}</Typography>

                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default function Header() {
// console.log('theme',darkTheme);
const darkTheme=useTheme();


var sess = sessionStorage.getItem('user');
const [userLocal,setUserLocal] = useState(sess);



const themeStyles={
  backgroundColor:darkTheme ?'rgba(10, 0, 0)':'rgba(250, 250, 250)',
  color:darkTheme?'#ccc':'#333',
  // padding:'2rem',
  // margin:'2rem',
}

  return (
  
    <div >
        <Router>
    
         
          <NavigationPanel cb={userLocal} />
       
        <AllRoutes />
        </Router>
        </div>
   

  )
}

