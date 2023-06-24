import React from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./Footer";
const MyOrders = () => {
    return (
        <>
            <style>
                {
                    `
                    .abtn1{
                        width:50%;
                        margin:1%;
                        border-radius:15px;
                        background-color:#2A88DF;
                    }
                    .maimg1{
                        font-size:2px;
                    }
                      .mafig1{
                        margin-left:20px;
                        height:40px;
                        width:40px;
                        background-color:#2A88DF;
                        border-radius:50%;
                      }
                      .matxt4{
                        color:#fff;
                        font-size:20px;
                        font-weight:bold;
                        letter-spacing:1px;
                      }
                      .maimg2{
                        font-size:20px;
                      }
                    @media screen and (max-width: 567px) {
                        .card-text {
                          margin-bottom: 0.5em;
                        }
                      }
                      
                      .card {
                        margin: 5%;
                        flex-direction: row;
                      }
                      .card-body {
                        padding: 0.5em 1em;
                        font-weight: 600;
                      }
                      .card1.card img {
                        max-width: 12em;
                        height: 100%;
                        border-bottom-left-radius: calc(0.25rem - 1px);
                        border-top-left-radius: calc(0.25rem - 1px);
                      }
                      .card-subtitle{
                        // color:#fff !important;
                      }
                    `
                }
            </style>
            <Header />
            <div style={{marginTop:"100px"}} className="container">
                <div style={{ margin: "20px auto", maxWidth: '1000px' }} className="card1 card border-2  align-items-center justify-content-center">
                    <img className="maimg2" src="./images/harikrushna.jpeg" alt="..." />
                    <div className="card-body">
                        <div class="container ">
                            <div class="row ">
                                <div class="col-6">
                                    <div class="d-flex ">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h5 className="card-title ">Harekrishna Restaurant</h5>
                                        </div>
                                        <div className=" mafig1 d-flex align-items-center justify-content-center" >
                                            <div className="matxt4">4.5</div>
                                        </div>
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Kamrej, Surat, Gujrat</h6>
                                    <p className="card-text">Flat <span style={{ color: "#2a88df", fontWeight: "bold" }}>10%</span> off on total bill</p>
                                    <div className="row">
                                        <div className="col-1 justify-content-start">
                                            <img className="maimg1" src="./images/map.png" alt="" />
                                        </div>
                                        <div className="col-11">
                                            Get Direction on Map
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    {/* <div class="container "> */}
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Menu</a>
                                    </div>
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Edit</a>
                                    </div>
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Cancel</a>
                                    </div>
                                    {/* </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ margin: "20px auto", maxWidth: '1000px' }} className="card1 card border-2  align-items-center justify-content-center">
                    <img className="maimg2" src="./images/harikrushna.jpeg" alt="..." />
                    <div className="card-body">
                        <div class="container ">
                            <div class="row ">
                                <div class="col-6">
                                    <div class="d-flex ">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h5 className="card-title ">Harekrishna Restaurant</h5>
                                        </div>
                                        <div className=" mafig1 d-flex align-items-center justify-content-center" >
                                            <div className="matxt4">4.5</div>
                                        </div>
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Kamrej, Surat, Gujrat</h6>
                                    <p className="card-text">Flat <span style={{ color: "#2a88df", fontWeight: "bold" }}>10%</span> off on total bill</p>
                                    <div className="row">
                                        <div className="col-1 justify-content-start">
                                            <img className="maimg1" src="./images/map.png" alt="" />
                                        </div>
                                        <div className="col-11">
                                            Get Direction on Map
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    {/* <div class="container "> */}
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Menu</a>
                                    </div>
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Edit</a>
                                    </div>
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Cancel</a>
                                    </div>
                                    {/* </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ margin: "20px auto", maxWidth: '1000px' }} className="card1 card border-2  align-items-center justify-content-center">
                    <img className="maimg2" src="./images/harikrushna.jpeg" alt="..." />
                    <div className="card-body">
                        <div class="container ">
                            <div class="row ">
                                <div class="col-6">
                                    <div class="d-flex ">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h5 className="card-title ">Harekrishna Restaurant</h5>
                                        </div>
                                        <div className=" mafig1 d-flex align-items-center justify-content-center" >
                                            <div className="matxt4">4.5</div>
                                        </div>
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Kamrej, Surat, Gujrat</h6>
                                    <p className="card-text">Flat <span style={{ color: "#2a88df", fontWeight: "bold" }}>10%</span> off on total bill</p>
                                    <div className="row">
                                        <div className="col-1 justify-content-start">
                                            <img className="maimg1" src="./images/map.png" alt="" />
                                        </div>
                                        <div className="col-11">
                                            Get Direction on Map
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    {/* <div class="container "> */}
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Menu</a>
                                    </div>
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Edit</a>
                                    </div>
                                    <div class="row justify-content-end">
                                        <a href="#" className="abtn1 btn btn-primary">Cancel</a>
                                    </div>
                                    {/* </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default MyOrders;