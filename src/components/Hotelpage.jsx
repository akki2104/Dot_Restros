import React, { useEffect } from 'react'
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
// reviews imports
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

import "../App.css"
import Hotellist from "./Hotellist"
import { useState } from 'react';
// import { Scale } from '@mui/icons-material';



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'yellow',
  },
}));













const Hotelpage = () => {





  let i = 0;
  const dishtype = document.querySelectorAll('[id^="dishtype"]');


  const [expanded, setExpanded] = React.useState(false);
  const [qtty, setQty] = React.useState(1);
  const [dishObject, setDishObject] = React.useState({
    name: "",
    qty: "",
    price: ""
  });
  const [dishArray, setDishArray] = React.useState([])
  const [newArray, setnewArray] = React.useState([])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { id } = useParams()

  const hotel = Hotellist.find((h) => {
    return (
      String(h.id) === id
    )
  })

  const [sumDish, setsumDish] = useState()

  useEffect(() => {
    const arr = Object.keys(hotel.menu).map((item) => {
      console.log(item.name,item.price)
      return {
        name: item.name,
        price:item.price,
        qty:0
      }
    })
    setnewArray(arr)
    console.log(Object.keys(hotel.menu))
    console.log("hello rutwik" , arr);
  }, [])



  useEffect(() => {


    const summary = dishArray.map((dish, index) => {
      return (
        <Grid sx={{ textAlign: "center", color: "#282828", marginBottom: "2%" }} container >
          <Grid xs={4}>
            <Typography variant="h7" fontWeight="700" >
              {dish.name}

            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="h7" fontWeight="700" >
              {dish.qty}

            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="h7" fontWeight="700" >
              {dish.price}

            </Typography>
          </Grid>

        </Grid>
      )
    })
    setsumDish(summary)

    console.log("..........")

    console.log(dishArray)
    console.log(summary)


  }, [dishArray])

  useEffect(() => {
    if (dishObject) {
      setDishArray(
        [
          ...dishArray,
          dishObject
        ]
      )
    }
  }, [dishObject])








  // const dishDetails=(name,qty)=>{
  //   console.log(dishtype)
  //   // if(dishtype.innerHTML===name){
  //   //   console.log("macthing")
  //   // }
  //   console.log(name)
  //   console.log(qty)
  // }


  console.log(hotel)
  console.log(Object.values(Object.values(hotel.menu)[0]))
  console.log(Object.values(Object.values(hotel.menu)[1]))
  console.log(Object.values(Object.values(hotel.menu)[2]))

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
                <Grid container sx={{ marginTop: "1%", alignItems: "center" }} xs={6} >
                  <Grid sx={{ display: "flex", alignItems: "center", marginRight: "1%" }} ><img src='/images/map.png' style={{ width: "25px", height: "25px " }} alt='cuisine logo' /></Grid>

                  <Grid>
                    <Typography variant="body2" color="text.secondary" >
                      Get directions on map
                    </Typography>
                  </Grid>

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
            action='/orders/send'
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

            {Object.keys(hotel.menu).map((item, index) => {
              const panel = "panel" + String(index + 1)
              console.log(panel)
              return (
                <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography Typography variant="h6" fontWeight="700" sx={{ width: '33%', flexShrink: 0 }}>
                      {item}
                    </Typography>

                  </AccordionSummary>

                  {(Object.keys(Object.values(hotel.menu)[i++])).map((type, index) => {
                    let k = i - 1;
                    let dishID = "dishtype" + String(type);
                    return (
                      <AccordionDetails>
                        <Grid container sx={{ justifyContent: "center", alignItems: "center" }} >
                          <Grid id={dishID} xs={4} sx={{ textAlign: "center" }} >
                            {type}
                          </Grid>
                          <Grid xs={4} sx={{ textAlign: "center" }} >
                            {Object.values(Object.values(hotel.menu)[k])[index]}
                          </Grid>
                          <Grid xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }} >

                            <AddCircleIcon
                              onClick={() => {
                                // console.log(e)
                                // const {name,qty}=[dishObject]



                                console.log("cliced")
                                if (dishID == "dishtype" + String(type)) {
                                  // console.log(dishID)

                                  // console.log(qtty)

                                  setDishObject({
                                    name: type,
                                    qty: String(qtty + 1),
                                    price: String(Object.values(Object.values(hotel.menu)[k])[index])
                                  })




                                  // console.log(dishObject)
                                  console.log(dishArray)
                                  // (oldValues) => {
                                  // if (dishObject.name !== "") {
                                  //   return [...oldValues, dishObject]
                                  // }



                                  // }
                                }
                              }
                              }
                              fontSize='large' sx={{
                                '&:hover': {

                                  color: "#2a8fff"
                                }, cursor: "pointer", color: '#2a88df'
                              }} />{ }
                            <RemoveCircleIcon fontSize='large' sx={{
                              '&:hover': {

                                color: "#2a8fff"
                              }, cursor: "pointer", color: '#2a88df'
                            }} />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    )

                  })}
                </Accordion>
              )
            })}





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
                      Price
                    </Typography>
                  </Grid>

                </Grid>
              }
            />

            <CardContent>
              {sumDish}
            </CardContent>


          </Card>
        </Grid>
      </Grid>

      <Grid container sx={{ display: { xs: "flex" }, marginTop: "5%", justifyContent: "center", marginLeft: { xs: "3%", md: "-1.6%" } }} spacing={0} >
        <Grid item xs={12} md={6} >
          <Card sx={{ width: 'auto', minWidth: "500px", height: 'auto', borderRadius: '20px', boxShadow: 0 }}>
            <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", marginLeft: "2%" }}
              title={
                <Grid container >
                  <Typography variant="h5" fontWeight="700" >
                    Top Reviews
                  </Typography>
                  <MenuItem sx={{
                    color: '#fff',
                    backgroundColor: "#2A88DF",
                    borderRadius: "10px",
                    width: "auto",
                    display: "flex",
                    fontFamily: 'Jost',
                    fontWeight: '700',
                    ml: 'auto',
                    '&:hover': {
                      backgroundColor: '#2475bf',
                    }
                  }} ><Link to={`/reviews`} >Add review</Link></MenuItem>
                </Grid>
              }
            />
            <CardContent>
              <Card sx={{ boxShadow: "none" }} >
                <CardHeader
                  sx={{ padding: '0 0 0 2%' }}
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                      A
                    </Avatar>
                  }

                  title={
                    <Typography variant="h7" fontWeight="700" >
                      Akash Yadav
                    </Typography>
                  }

                />
                <CardContent sx={{ padding: '0 0 0 2%', marginLeft: "8%" }} >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aliquid dolor at molestias. Consequuntur, necessitatibus labore dicta recusandae deserunt ut tenetur aperiam ducimus ratione excepturi praesentium totam perspiciatis similique minus dolor autem a assumenda nostrum aliquid repudiandae iste obcaecati nemo modi. Ad reiciendis mollitia quis porro ullam, molestiae nobis officia.
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: "none" }} >
                <CardHeader
                  sx={{ padding: '0 0 0 2%' }}
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                      H
                    </Avatar>
                  }

                  title={
                    <Typography variant="h7" fontWeight="700" >
                      Harsh Singh
                    </Typography>
                  }

                />
                <CardContent sx={{ padding: '0 0 0 2%', marginLeft: "8%" }} >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aliquid dolor at molestias. Consequuntur, necessitatibus labore dicta recusandae deserunt ut tenetur aperiam ducimus ratione excepturi praesentium totam perspiciatis similique minus dolor autem a assumenda nostrum aliquid repudiandae iste obcaecati nemo modi. Ad reiciendis mollitia quis porro ullam, molestiae nobis officia.
                </CardContent>
              </Card>

            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ paddingLeft: "%", marginLeft: "10%", width: '505px', height: '470px', borderRadius: '20px', boxShadow: 0 }} >


            <Card sx={{ boxShadow: 0 }} >
              <CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "2% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      5 star
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={33} />
                </CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "2% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      4 star
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={30} />
                </CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "2% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      3 star
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={20} />
                </CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "2% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      2 star
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={50} />
                </CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "10% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      Staff
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={10} />
                </CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "2% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      Food
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={40} />
                </CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "2% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      Ambience
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={45} />
                </CardContent>
                <CardHeader sx={{ backgroundColor: "white", color: "#2A88DF", padding: "2% 0 2% 3%" }}
                  title={

                    <Typography variant="h7" fontWeight="700" >
                      Services
                    </Typography>
                  }
                />
                <CardContent sx={{ padding: "0px 0px 0px 3.5%" }} >
                  <BorderLinearProgress variant="determinate" value={8} />
                </CardContent>

              </CardContent>
            </Card>
          </Card>

        </Grid>
      </Grid>





    </>
  )
}

export default Hotelpage