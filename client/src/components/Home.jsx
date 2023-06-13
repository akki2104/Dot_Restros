import React from "react";
import Header from "./Header";
import Flyer from "./Flyer";
import Hotelcard from './Cards';
import Hotellist from './Hotellist'
import Grid from '@mui/material/Grid';
import "../App.css"
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
    return (
        <>
            <Header />
            <Flyer />
            <h2 style={{ marginLeft: '6.7%', marginTop: '30px' }} >Best Rated</h2> 
            <Grid sx={{ marginLeft:"0%", MarginRight:"0%", marginTop: '20px', justifyContent: 'center' }} container spacing={0}>
                {Hotellist.map((val,index) => {
                    console.log(index)
                    return (
                         <Grid key={index} item lg={3} md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', }} >
                         <Link to={`/hotelpage/${val.id}`} ><Hotelcard name={val.name} location={val.location} discount={val.discount} />
                         </Link></Grid>
                    )
                })}

            </Grid>
            <Footer/>
        </>

    )
}

export default Home