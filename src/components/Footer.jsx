import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <style>
                {
                    `.ftxt1{
            color:#fff;
            text-align:start;
            font-size:16px;
          }
          .ftxt2{
            font-size:25px;
          }
          .ftxt3{
            margin-top:5%;
          }
          .fimg1{
            width: 50%;
            height: 50%;
          }
          @media only screen and (max-width: 900px) {
            .ftxt1{
              font-size:15px;
            }
            .ftxt2{
              font-size:20px;
            }
            .ftxt3{
              font-size:12px;
            }
            & svg{
              transform: scale(0.75);
            }
            .fimg1{
              margin-left: 2%;
            }
          }
          @media only screen and (max-width: 768px) {
            .ftxt1{
              font-size:12px;
            }
            .ftxt2{
              font-size:16px;
            }
            .ftxt3{
              font-size:8px;
            }
            .fimg1{
              height:40%;
              margin-left:4%;
            }
            // & svg{
            //   transform: scale(0.5);
            // }
          }
          @media only screen and (max-width: 550px) {
            .ftxt1{
              font-size:10px;
            }
            .ftxt2{
              font-size:12px;
            }
            .ftxt3{
              font-size:8px;
            }
          }
          @media only screen and (max-width: 450px) {
            .ftxt1{
              font-size:8px;
            }
            .ftxt2{
              font-size:10px;
            }
            .ftxt3{
              font-size:5px;
            }
            & svg{
              transform: scale(0.50);
            }
            .fimg1{
              height:30%;
              margin-left:4%;
            }
          }
          `
                }
            </style>
            <Box
                sx={{ bgcolor: "#333", color: "white", p: 3 }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}>
                        <img className='fimg1' src="/images/LOGO.png" alt="dotrestrosLogo" />
                        <Box
                            sx={{
                                my: 3,
                                "& svg": {
                                    fontSize: "30px",
                                    cursor: "pointer",
                                    mr: 2,
                                },
                                "& svg:hover": {
                                    // color: "goldenrod",
                                    color: "#2A88DF",
                                    transform: "translateX(5px)",
                                    transition: "all 400ms",
                                },
                            }}
                        >
                            {/* icons */}
                            <Grid container>
                                <Grid item xs={3}><InstagramIcon className="ficon1" /></Grid>
                                <Grid item xs={3}><TwitterIcon /></Grid>
                                <Grid item xs={3}><GitHubIcon /></Grid>
                                <Grid item xs={3}><YouTubeIcon /></Grid>
                            </Grid>
                            <Typography className="ftxt3">
                                All Rights Reserved &copy; DoT Restros
                            </Typography>

                        </Box>

                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <Grid container sx={{ textAlign: "left" }}>
                            <Grid item xs={6} >
                                <Stack className="ftxt2" sx={{
                                    color: "#2A88DF",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    paddingBottom: "5px",
                                }} spacing={4}>
                                    COMPANY
                                </Stack>
                                <Link style={{ textDecoration: "none" }} to="./aboutus" ><Grid className="ftxt1">About US</Grid></Link>
                                <Link style={{ textDecoration: "none" }} to="./myorders" ><Grid className="ftxt1">My Orders</Grid></Link>
                                <Grid className="ftxt1">Terms & Conditions</Grid>
                                <Grid className="ftxt1">Privacy Policy</Grid>
                                <Grid className="ftxt1">Guest Policy</Grid>
                                <Grid className="ftxt1">Cancelation Policy</Grid>

                            </Grid>
                            <Grid item xs={6}>
                                <Stack className="ftxt2" sx={{ color: "#2A88DF", fontWeight: "bold", fontSize: "20px", paddingBottom: "5px" }} spacing={2}>
                                    QUICK LINKS
                                </Stack>
                                <Grid className="ftxt1">Home</Grid>
                                <Grid className="ftxt1">Plan Meal</Grid>
                                <Grid className="ftxt1">My Order</Grid>
                                <Grid className="ftxt1">Contact Us</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Box>
        </>
    );
};

export default Footer;