import React from 'react'
import Header from './Header'
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import "../App.css"
import DatePick from './Datepick';















const Hotelpage = () => {
  return (
    <>
      <Header />
      <Grid sx={{ marginTop: "5%", display: "flex", justifyContent: "center", marginLeft: '-1.6%' }} container spacing={0}>
        <Grid xs={6}>

          <Card sx={{ width: 'auto', height: 'auto', borderRadius: '20px', boxShadow: 0 }}>

            <CardMedia
              component="img"
              height="370px"
              image="./images/harikrushna.jpeg"
              alt="Paella dish"
            />
            <CardHeader
              sx={{ paddingBottom: 0 }}

              title={
                <Grid container >
                  <Grid sx={{}} xs={8} >
                    <Typography variant="h5" fontWeight="700" >
                      Harikrushna Restaurent
                    </Typography>
                  </Grid>
                  <Grid sx={{ paddingLeft: "23%" }} xs={4} >
                    <Fab sx={{ boxShadow: "none" }} color="primary" aria-label="add">
                      <Typography variant="h7" fontWeight="700" fontSize="20px"  >
                        4.7
                      </Typography>
                    </Fab>
                  </Grid>

                </Grid>
              }
              subheader={
                <Grid sx={{ marginTop: "-2.5%" }} >
                  <Typography variant="h7" fontWeight="700" color="text.secondary"  >
                    1st Floor, Jyoti park society, Kamrej
                  </Typography>
                </Grid>
              }

            />
            <CardContent sx={{ paddingTop: 0 }}  >
              <Grid container spacing={0} >
                <Grid xs={6} >
                  <Typography variant="body2" color="text.secondary" fontWeight="700"  >
                    Contact-72XXXXXXXXX3
                  </Typography>
                </Grid>
                <Grid sx={{ paddingLeft: "23%" }} xs={6} >
                  <Typography variant="body2" color="text.secondary" fontWeight="700">
                    Flat <span style={{ color: "#2A88DF" }} >10%</span> off on the total bill
                  </Typography>
                </Grid>
              </Grid>
              <Grid container >
                <Grid sx={{ marginTop: "1%" }} xs={6} >
                  <Typography variant="body2" color="text.secondary"  >
                    Get Directions on the map
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingLeft: "7%", marginTop: "0%" }} xs={6} >
                  <Grid sx={{ marginLeft: "40%" }} xs={3} >
                    <MenuItem sx={{
                      color: '#fff',
                      backgroundColor: "#2A88DF",
                      borderRadius: "10px",
                      width: "auto",
                      display: "flex",
                      fontFamily: 'Jost',
                      fontWeight: '700',
                      mr: '0%',
                      '&:hover': {
                        backgroundColor: '#2475bf',
                      }
                    }} ><Link to="/hotelname/menu" >Menu</Link></MenuItem>

                  </Grid>
                  <Grid sx={{ marginLeft: "3%" }} xs={3} >
                    <MenuItem sx={{
                      color: '#fff',
                      backgroundColor: "#2A88DF",
                      borderRadius: "10px",
                      width: "auto",
                      display: "flex",
                      fontFamily: 'Jost',
                      fontWeight: '700',
                      mr: '0%',
                      '&:hover': {
                        backgroundColor: '#2475bf',
                      }
                    }} ><Link to="/payment" >Pay Bill</Link></MenuItem>

                  </Grid>

                </Grid>
              </Grid>
            </CardContent>


          </Card>

        </Grid>
        <Grid xs={4}>
          <Card sx={{ paddingLeft: "5%", marginLeft: "10%", width: '505px', height: '525px', borderRadius: '20px', boxShadow: 0 }}>
            <CardHeader
              sx={{ marginTop: "5%", paddingBottom: 0 }}

              title={
                <Grid container sx={{ alignItems: "center" }} >
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='./images/cuisine.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

                  <Grid>
                    <Typography variant="h6" fontWeight="700" >
                      CUISINE
                    </Typography>
                  </Grid>
                </Grid>

              }
              subheader={

                <Typography sx={{ marginLeft: "30px" }} variant="h7" fontWeight="700" color="text.secondary"  >
                  Gujrati, Punjabi, Beverages
                </Typography>

              }
            />
            <CardHeader
              sx={{ marginTop: "5%", paddingBottom: 0 }}

              title={
                <Grid container sx={{ alignItems: "center" }} >
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='./images/type.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

                  <Grid>
                    <Typography variant="h6" fontWeight="700" >
                      TYPE
                    </Typography>
                  </Grid>
                </Grid>

              }
              subheader={

                <Typography sx={{ marginLeft: "30px" }} variant="h7" fontWeight="700" color="text.secondary"  >
                  Fine Dine
                </Typography>

              }
            />
            <CardHeader
              sx={{ marginTop: "5%", paddingBottom: 0 }}

              title={
                <Grid container sx={{ alignItems: "center" }} >
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='./images/facilities.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

                  <Grid>
                    <Typography variant="h6" fontWeight="700" >
                      FACILITIES
                    </Typography>
                  </Grid>
                </Grid>

              }
              subheader={

                // <Typography sx={{ marginLeft:"30px" }} variant="h7" fontWeight="700" color="text.secondary"  >
                //   Fine Dine
                // </Typography>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid container xs={6} sx={{ marginTop: "3%" }} >
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "3%", marginLeft: "30px" }} ><img src='./images/wifi.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                    <Grid>
                      <Typography variant="h7" fontWeight="700" >
                        Wifi
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={6} sx={{ marginTop: "3%" }}>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "0%", marginLeft: "30px" }} ><img src='./images/ac.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                    <Grid>
                      <Typography variant="h7" fontWeight="700" >
                        Air Conditioned
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={6} sx={{ marginTop: "3%" }}>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "3%", marginLeft: "30px" }} ><img src='./images/car.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                    <Grid>
                      <Typography variant="h7" fontWeight="700" >
                        Parking
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={6} sx={{ marginTop: "3%" }}>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "3%", marginLeft: "30px" }} ><img src='./images/serving.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                    <Grid>
                      <Typography variant="h7" fontWeight="700" >
                        Serving
                      </Typography>
                    </Grid>
                  </Grid>

                </Grid>

              }
            />
            <CardHeader
              sx={{ marginTop: "5%", paddingBottom: 0 }}

              title={
                <Grid container sx={{ alignItems: "center" }} >
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='./images/type.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

                  <Grid>
                    <Typography variant="h6" fontWeight="700" >
                      AVERAGE COST
                    </Typography>
                  </Grid>
                </Grid>

              }
              subheader={

                <Typography sx={{ marginLeft: "30px" }} variant="h7" fontWeight="700" color="text.secondary"  >
                  500 for 2 person
                </Typography>

              }
            />
          </Card>
        </Grid>
      </Grid>


      <Grid sx={{ marginTop: "2%",justifyContent:"center",marginLeft:"-0.1%" }} container  >
        <Grid sx={{ backgroundColor:"#fff",borderRadius:"20px" }} xs={4} >
          <Typography sx={{ marginTop:"2%",marginLeft:"3.3%" }} variant="h6" fontWeight="700" >
            Booking Details
          </Typography>

          <Grid sx={{ marginLeft:"3.3%",display: "grid" }} >
            <Box


              sx={{
                '& > :not(style)': { m: 1, width: '40ch' }

              }}
              Validate
              autoComplete="off"
            >
              <TextField  type='text' id="outlined-basic" label="Full Name" variant="outlined" />
              
              
            </Box>
            <Box


              sx={{
                '& > :not(style)': { m: 1, width: '25ch' }

              }}
              Validate
              autoComplete="off"
            >
              
              <TextField type='tel' id="outlined-basic" label="Mobile Number" variant="outlined" />
              
            </Box>


          </Grid>


        </Grid>
        <Grid sx={{ marginLeft:"3%",backgroundColor:"#fff",borderRadius:"20px" }} xs={2} >
          <Typography variant="h6" fontWeight="700" >
            Date
          </Typography>
          <DatePick />
        </Grid>
        <Grid xs={4} >
          <Typography variant="h6" fontWeight="700" >
            Time Slot
          </Typography>
        </Grid>

      </Grid>

    </>
  )
}

export default Hotelpage