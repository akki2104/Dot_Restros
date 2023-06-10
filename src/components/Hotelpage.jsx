import React from 'react'
import Header from './Header'
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { Link, useParams } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
// import Box from '@mui/material/Box';
// import { useState } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import DatePick from './Datepick';
import Timepick from './Timepick';
// import userEvent from '@testing-library/user-event';



//accordion for menu items of hotel
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../App.css"
import Hotellist from "./Hotellist"














const Hotelpage = () => {   //de-structuring props and using match to find the particular hotelpage
  // const [user, setUser] = useState({
  //   name: ""
  // })
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { id } = useParams()

  const hotel = Hotellist.find((h) => {
    return (
      String(h.id) === id
    )
  })

  console.log(hotel)

  // let name, value;
  const takeValue = (v) => {

    // console.log(name)

    console.log(v.target.value)

  }
  const getDate = (v) => {
    // setDate(currDate)
    console.log(v.$D)
    console.log(v.$M + 1)
    console.log(v.$y)
  }
  const getTime = (v) => {
    console.log(v.$H)
    console.log(v.$m)
  }





  return (
    <>
      <Header />
      <Grid sx={{ display: { xs: "flex" }, marginTop: "5%", justifyContent: "center", marginLeft: { xs: "3%", md: "-1.6%" } }} container spacing={0}>
        <Grid sx={{}} item md={6} xs={12}>

          <Card sx={{ width: 'auto', minWidth: "500px", height: 'auto', borderRadius: '20px', boxShadow: 0 }}>

            <CardMedia
              component="img"
              height="370px"
              image={hotel.image}
              alt="Paella dish"
            />
            <CardHeader
              sx={{ paddingBottom: 0 }}

              title={
                <Grid container >
                  <Grid sx={{}} xs={8} >
                    <Typography variant="h5" fontWeight="700" >
                      {hotel.name}
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
                    {hotel.location}
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
                <Grid container sx={{ paddingLeft: { xs: "0", md: "7%" }, marginTop: "0%" }} xs={6} >
                  <Grid sx={{ marginLeft: { xs: "40%" } }} xs={3} >
                    <MenuItem sx={{
                      color: '#fff',
                      backgroundColor: "#2A88DF",
                      borderRadius: "10px",
                      width: "70px",
                      display: "flex",
                      fontFamily: 'Jost',
                      fontWeight: '700',
                      mr: '0%',
                      '&:hover': {
                        backgroundColor: '#2475bf',
                      }
                    }} ><Link to="/hotelname/menu" >Menu</Link></MenuItem>

                  </Grid>
                  <Grid sx={{ marginLeft: { xs: "14px", md: "3%" } }} xs={3} >
                    <MenuItem sx={{
                      color: '#fff',
                      backgroundColor: "#2A88DF",
                      borderRadius: "10px",
                      width: "80px",
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
        <Grid item md={4} xs={12}>
          <Card sx={{ paddingLeft: "5%", marginLeft: "10%", width: '505px', height: '525px', borderRadius: '20px', boxShadow: 0 }}>
            <CardHeader
              sx={{ marginTop: "5%", paddingBottom: 0 }}

              title={
                <Grid container sx={{ alignItems: "center" }} >
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='/images/cuisine.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

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
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='/images/type.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

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
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='/images/facilities.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

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
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "3%", marginLeft: "30px" }} ><img src='/images/wifi.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                    <Grid>
                      <Typography variant="h7" fontWeight="700" >
                        Wifi
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={6} sx={{ marginTop: "3%" }}>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "0%", marginLeft: "30px" }} ><img src='/images/ac.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                    <Grid>
                      <Typography variant="h7" fontWeight="700" >
                        Air Conditioned
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={6} sx={{ marginTop: "3%" }}>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "3%", marginLeft: "30px" }} ><img src='/images/car.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                    <Grid>
                      <Typography variant="h7" fontWeight="700" >
                        Parking
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={6} sx={{ marginTop: "3%" }}>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "3%", marginLeft: "30px" }} ><img src='/images/serving.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

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
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='/images/type.png' style={{ width: "30px", height: "30px " }} alt='cuisine logo' /></Grid>

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


      <Grid sx={{ marginTop: "2%", justifyContent: "center", marginLeft: { xs: "3%", md: "-0.1%", minWidth: "500px" } }} container  >
        <Grid sx={{ backgroundColor: "#fff", borderRadius: "20px" }} >




          <Grid
            container

            display="flex"
            method='POST'
            action='/details'
            component="form"

            sx={{
              '& > :not(style)': { m: 3.4, width: '40ch' }

            }}

            autoComplete="off"
          >
            <Grid item xs={5} >
              <Grid><Typography item sx={{}} variant="h6" fontWeight="700" >
                Booking Details
              </Typography></Grid>
              <Grid><TextField onChange={takeValue} name='fullname' type='text' id="outlined-basic" label="Full Name" variant="outlined" /></Grid>
              <Grid><TextField name="number" type='tel' id="outlined-basic" label="Mobile Number" variant="outlined" /></Grid>
            </Grid>
            <Grid item sx={{ backgroundColor: "#fff", borderRadius: "20px" }} xs={2} >
              <Typography variant="h6" fontWeight="700" >
                Date
              </Typography>
              <DatePick forValue={getDate} />
            </Grid>
            <Grid sx={{}} item xs={2} >
              <Typography variant="h6" fontWeight="700" >
                Time Slot
              </Typography>
              <Timepick forValue={getTime} />
            </Grid>




          </Grid>


        </Grid>


      </Grid>

      <Grid sx={{ display: { xs: "flex" }, marginTop: "2%", justifyContent: "center", marginLeft: '-1.8%' }} container spacing={2}>
        <Grid item xs={12} md={6} >
          <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography Typography variant="h6" fontWeight="700" sx={{ width: '33%', flexShrink: 0 }}>
                  Dish 1
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography Typography variant="h6" fontWeight="700" sx={{ width: '33%', flexShrink: 0 }}> Dish 2</Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                  varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                  laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography Typography variant="h6" fontWeight="700" sx={{ width: '33%', flexShrink: 0 }}>
                  Dish 3
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                  amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography Typography variant="h6" fontWeight="700" sx={{ width: '33%', flexShrink: 0 }}>Dish 4</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                  amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item xs={12} md={4} >
          <Card sx={{ padding: "0% ", marginLeft: "6%", width: '505px', height: '525px', borderRadius: '20px', boxShadow: 0 }}>
            <CardHeader

              sx={{ backgroundColor: "#2A88DF", borderRadius: "20px", color: "white" }}

              title={
                <Typography variant="h5" fontWeight="700" >
                  Order Summary
                </Typography>
              }
              subheader={
                <Grid sx={{ textAlign: "center", color: "white" }} container >
                  <Grid xs={4}>
                    <Typography variant="h7" fontWeight="700" >
                      Item
                    </Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="h7" fontWeight="700" >
                      Quantity
                    </Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="h7" fontWeight="700" >
                      Net Total
                    </Typography>
                  </Grid>

                </Grid>
              }
            />

            <CardContent>
              <Grid sx={{ textAlign: "center", color: "#282828" }} container >
                <Grid xs={4}>
                  <Typography variant="h7" fontWeight="700" >
                    Kaju Butter Masala
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Typography variant="h7" fontWeight="700" >
                    1
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Typography variant="h7" fontWeight="700" >
                    190
                  </Typography>
                </Grid>

              </Grid>
            </CardContent>


          </Card>
        </Grid>
      </Grid>





    </>
  )
}

export default Hotelpage