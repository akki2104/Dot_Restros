import React from 'react'
import Box from '@mui/material/Box';
import '../App.css'
// import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const searchLogo = "./images/LOGO.png"
const spoonShadow = "./images/shadowSpoon.png";


const Flyer = () => {





  return (
    <>
      <Box className='flyer_main' sx={{ backgroundColor: '#282828', width: 'auto', height: "560px", flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', alignItems: 'center' }} >

        <p className='headline' >Want a <span style={{ color: '#2a88df' }} >Dawat</span>, Grab it from Us!</p>



        <div
          component="form"
          style={{ backgroundColor: '#fff', color: 'red', p: '2px 4px', display: 'flex', alignItems: 'center', width: '57%', height: '60px', position: 'absolute', marginTop: '3%', zIndex: 2, border: 'none', borderRadius: '10px' }}
        >
          {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <img src={searchLogo} alt="dor restros logo" style={{ width: '60px', height: '30px', margin: '10px' }} />
          <Divider sx={{ height: 35, m: 0.5, width: '2px', backgroundColor: '#2a88df', borderRadius: '5px', borderRight: 0 }} orientation="vertical" />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Restaurent, Place, Cuisine..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon style={{ fontSize: '30px', color: '#2a88df ' }} />
          </IconButton>


        </div>



        <img className='spoon_Shadow' src={spoonShadow} alt="spoon and shadow" style={{ height: "300px", zIndex: 1, marginTop: '6%' }} />

      </Box>
    </>

  )
}

export default Flyer