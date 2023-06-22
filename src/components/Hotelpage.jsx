import React, { useEffect } from 'react'
import Header from './Header'
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { Link, useParams } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
// import dayjs from 'dayjs';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import DatePick from './Datepick';
import Timepick from './Timepick';
import Footer from "./Footer";


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import "../App.css"
import Hotellist from "./Hotellist"
import { useState } from 'react';
import axios from 'axios'

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

  const [expanded, setExpanded] = useState(false);
  const [plus, setPlus] = useState();
  const [dishObject, setDishObject] = useState({
    name: "",
    qty: "",
    price: ""
  });
  const [dishArray, setDishArray] = useState([])
  const [sumDish, setsumDish] = useState(true)
  const [total, setTotal] = useState(0)
  const [bookingName, setbookingName] = useState("")
  const [telno, settelno] = useState(123456789)
  const [date, setdate] = useState("")
  const [time, settime] = useState("")

  useEffect(() => {
    if (dishObject.name !== "") {
      let existing = false;
      dishArray.forEach(obj => {
        if (obj.name === dishObject.name) {
          return existing = true;
        }
      })
      if (existing) {
        const newdishArray = dishArray.map(obj => {
          if (obj.name === dishObject.name && obj.qty > 0) {
            if (plus) return { ...obj, qty: (obj.qty) + 1 };
            else {
              return { ...obj, qty: obj.qty - 1 }
            }
          }
        });

        setDishArray(newdishArray);

      } else if (plus) {
        setDishArray(
          [
            ...dishArray,
            dishObject
          ]
        )
      }
    }
  }, [plus, dishObject])
  useEffect(() => {
    const summary = dishArray.map((dish) => {
      if (dish.qty > 0) {
        return (
          <Grid sx={{ textAlign: "center", color: "#282828", marginBottom: "2%" }} container >
            <Grid xs={4}>
              <Typography variant="h7" fontWeight="400" >
                {dish.name}
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography variant="h7" fontWeight="400" >
                {dish.qty}

              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography variant="h7" fontWeight="400" >
                {dish.price}

              </Typography>
            </Grid>

          </Grid>
        )
      }

    })
    setsumDish(summary)
    dishArray.forEach((item => {

      if (plus) {
        setTotal(total + Number(item.price))
      }
      else if (total > 0 && total >= (Number(dishObject.price))) {
        setTotal(total - (Number(dishObject.price)))
      }



    }))

    //eslint-disable-next-line
  }, [dishArray])
  const customerName = (v) => {
    setbookingName(v.target.value)
  }
  const mobileNumber = (v) => {
    settelno(v.target.value)
  }
  const getDate = (v) => {
    let selDate = `${v.$D}/${v.$M + 1}/${v.$y}`
    setdate(selDate)
  }
  const getTime = (v) => {
    settime(`${v.$H}:${v.$m}`)
  }
  const sendOrderDetails = () => {
    const sendData = async () => {
      try {
        const response = await fetch("http://localhost:4000/orders/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "customerDetails": {
              "bookingName": bookingName,
              "phoneNumber": String(telno)
            },
            "bookingDetails": {
              "date": date,
              "time": time
            },
            "restaurant": {
              "name": hotel.name,
              "code": hotel.id
            },
            "orderDetails": dishArray.filter((items) => {
              return items.qty > 0
            })

          }),
          credentials: "include"
        });
        const data = await response.json();
      } catch (error) {
      }
    }
    sendData();
  }
  const { id } = useParams()

  const hotel = Hotellist.find((h) => {
    return (
      String(h.id) === id
    )
  })


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


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
                        {hotel.rating}
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
            sx={{
              '& > :not(style)': { m: 3.4, width: '40ch' }
            }}
            autoComplete="off"
          >
            <Grid item xs={5} >
              <Grid><Typography item sx={{}} variant="h6" fontWeight="700" >
                Booking Details
              </Typography></Grid>
              <Grid><TextField onChange={customerName} name='fullname' type='text' id="outlined-basic" label="Full Name" variant="outlined" /></Grid>
              <Grid><TextField onChange={mobileNumber} name="number" type='tel' id="outlined-basic" label="Mobile Number" variant="outlined" /></Grid>
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
                                setPlus(true)
                                setDishObject({
                                  name: String(type),
                                  qty: 1,
                                  price: String(Object.values(Object.values(hotel.menu)[k])[index])
                                })
                              }
                              }
                              fontSize='large' sx={{
                                '&:hover': {

                                  color: "#2a8fff"
                                }, cursor: "pointer", color: '#2a88df'
                              }} />{ }
                            <RemoveCircleIcon onClick={() => {
                              setPlus(false)
                              setDishObject({
                                name: String(type),
                                qty: 1,
                                price: String(Object.values(Object.values(hotel.menu)[k])[index])
                              })
                            }}
                              fontSize='large' sx={{
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
          <Card sx={{ padding: "0% ", marginLeft: "6%", width: '505px', height: '700px', borderRadius: '20px', boxShadow: 0, display: "flex", flexDirection: "column" }}>
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
            <CardContent sx={{ maxHeight: "470px", overflow: "auto" }} >
              {sumDish}
            </CardContent>
            <CardContent sx={{ color: "#2a88df", marginTop: "auto" }} >
              <Grid sx={{ color: "#282828", marginBottom: "2%" }} container >
                <Grid xs={4}>
                  <Typography variant="h5" fontWeight="700" >
                    Total
                  </Typography>
                </Grid>
                <Grid sx={{ marginLeft: "auto", textAlign: "center" }} xs={4}>
                  <Typography variant="h5" fontWeight="700" >
                    {total}
                  </Typography>
                </Grid>
              </Grid>
              <Grid sx={{ color: "#282828", marginBottom: "2%" }} container >
                <Grid xs={4}>
                  <Typography variant="h5" fontWeight="700" >
                    Advance
                  </Typography>
                </Grid>
                <Grid sx={{ marginLeft: "auto", textAlign: "center" }} xs={4}>
                  <Typography variant="h5" fontWeight="700" >
                    {0.2 * total}
                  </Typography>
                </Grid>
              </Grid>
              <Grid sx={{ color: "#282828", marginBottom: "2%" }} container >
                <Grid xs={4}>
                  <Typography variant="h5" fontWeight="700" >
                    Remaining
                  </Typography>
                </Grid>
                <Grid sx={{ marginLeft: "auto", textAlign: "center" }} xs={4}>
                  <Typography variant="h5" fontWeight="700" >
                    {total - (0.2 * total)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid sx={{ color: "#282828", marginBottom: "2%" }} container >
                <Grid xs={8}>
                  <Typography variant="h7" fontWeight="400" >
                    Pay 20% to confirm your order. Discount will be done at the restaurent.
                  </Typography>
                </Grid>
                <Grid sx={{ marginLeft: "auto", textAlign: "center" }} xs={4}>
                  <Link onClick={sendOrderDetails} >
                    <MenuItem className='logsin_big' sx={{
                      justifyContent: "center",
                      color: '#fff',
                      backgroundColor: "#2A88DF",
                      borderRadius: "20px",
                      padding: "8px 20px 8px 20px",
                      fontFamily: 'Jost',
                      fontWeight: '700',
                      mr: '5.5%',
                      '&:hover': {
                        backgroundColor: '#2475bf',
                      }
                    }} >Pay {0.2 * total} Rs. </MenuItem></Link>
                </Grid>
              </Grid>
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
                  }} ><Link style={{ textDecoration: 'none',color:"#fff" }}  to={`/reviews`} >Add review</Link></MenuItem>
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
      <Footer />
    </>
  )
}
export default Hotelpage









