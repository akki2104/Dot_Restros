import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Aboutus = () => {
  return (
    <>
      <style>
        {`*{
    margin: 0;
    padding: 0;
}
html,body{
  height:100%;
}
.main{
  margin-top:60px;
    position: relative;
}
.part2{
  padding-top:20px;
  padding-bottom:60px;
    // background-color: #333;
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
}

.largediv{
    height: 3vw;
    width: 3vw;
    border-radius: 25px;
}
.mediumdiv{
  height: 2vw;
  width: 2vw;
    border-radius: 2rem;
}
.smalldiv{
  height: 1vw;
  width: 1vw;
    border-radius: 2rem;
}
.color1{
    background-color: #2A88DF;
}
.color2{
    background-color: #fff;
}
.btn1{
    color: #fff !important;
    border-color: #fff !important;
    font-size:22px;
}
.btn:hover{
    border-color:  #2A88DF !important;
}
.img1{
  height: 120px;
  width: 82px;
  padding-top:30px;
}
.img2{
  height: 120px;
  width: 120px;
  padding-top:20px;
}
.img3{
  height: 120px;
  width: 130px;
  padding-top:20px;
}
.img4{
  height: 120px;
  width: 110px;
  padding-top:20px;
}
.head2{
  margin: 4rem 0;
  font-weight: 400;
  font-size:2.25vw;
  letter-spacing:2px;
}
.txt1{
  text-align: center;
  font-size: 1.5vw;
}
.wwa{
  font-size: 20px;
  color:rgb(84, 84, 84);
  margin-bottom: 3rem;
}
.head3{
  font-weight:bold;
}
.cd1{
  width:18rem;
  height:200px;
  margin-left:auto;
  background-color:#333;
  color:#fff;
  margin-bottom:10%;
  margin-right:3%;
}
.cd2{
  width:18rem;
  height:200px;
  margin-right:auto;
  background-color:#333;
  color:#fff;
  margin-left:3%;
  // text-align:end;
}
.acd{
  font-size:28px;
  color:#2A88DF;
  font-weight:bold;
  letter-spacing:1px;
}
.afig1{
  height:120px;
  width:120px;
  background-color:#2A88DF;
  border-radius:50%;
}
.ares{
  z-index: 10;
  position: relative;
  width: 100% ;
  margin-bottom:240px;
  padding-top:170px;
}
.atxt4{
  color:#fff;
  font-size:28px;
  font-weight:bold;
  letter-spacing:1px;
}
#aani{
  color:#2A88DF;
}
#aani:after {
  content:"Dawat";
  animation: spin 4s linear infinite;
}
.aw1{
  width:40px;
}
.aw2{
  width:30px;
}
.aw3{
  width:20px;
}
@keyframes spin {
  0% { content:"Dawat"; }
  33% { content:"Deals"; }
  66% { content:"Places"; }
}
// animation-------------
.snowflake {
  color: #fff;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #000;
}

@-webkit-keyframes snowflakes-fall {
    0% {
        top: 0%;
    }

    100% {
        top: 100%;
    }
}

@-webkit-keyframes snowflakes-shake {
    0%{
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }

    50% {
        -webkit-transform: translateX(80px);
        transform: translateX(80px);
    }

    100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }
}

@keyframes snowflakes-fall {
  0% {
    top: 0%;
  }

  100% {
    top: 90%;
  }
}

@keyframes snowflakes-shake {
  0%{
    transform: translateX(0px);
  }

  50% {
    transform: translateX(70px);
  }

  100% {
    transform: translateX(0px);
  }
}

.snowflake {
    position: absolute;
    top: -10%;
    z-index: 9999;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor:default;

    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;

    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
}
.snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
}
.snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
}
.snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, 0.5s;
    animation-delay: 6s, 0.5s;
}
.snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
}
.snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
}
.snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
}
.snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
}
.snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2.5s, 1s;
    animation-delay: 2.5s, 1s;
}
.snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
}
.snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1.5s;
    animation-delay: 3s, 1.5s;
}
.snowflake:nth-of-type(10) {
    left: 25%;
    -webkit-animation-delay: 2s, 0s;
    animation-delay: 2s, 0s;
}
.snowflake:nth-of-type(11) {
    left: 65%;
    -webkit-animation-delay: 4s, 2.5s;
    animation-delay: 4s, 2.5s;
}

@media only screen and (max-width: 900px) {
  @keyframes snowflakes-shake {
    0%{
      transform: translateX(0px);
    }
  
    50% {
      transform: translateX(62px);
    }
  
    100% {
      transform: translateX(0px);
    }
  }
  .aw1{
    width:30px;
  }
  .aw2{
    width:22.5px;
  }
  .aw3{
    width:15px;
  }
  .img1{
    height: 72px;
    width: 60px;
    padding-top:20px;
  }
  .img2{
    height: 72px;
    width: 72px;
  }
  .img3{
    height: 72px;
    width: 78px;
  }
  .img4{
    height: 72px;
    width: 66px;
  }
}
@media only screen and (max-width: 768px) {
  @keyframes snowflakes-shake {
    0%{
      transform: translateX(0px);
    }
  
    50% {
      transform: translateX(48px);
    }
  
    100% {
      transform: translateX(0px);
    }
  }
  .aw1{
    width:24px;
  }
  .aw2{
    width:18px;
  }
  .aw3{
    width:12px;
  }
  .btn1{
    font-size:15px;
    margin-bottom:20px;
  }
  .wwa{
    font-size: 15px;
  }
  .head3{
    font-size:30px;
  }
  .cd1{
    height:150px;
    width:15rem;
  }
  .cd2{
    height:150px;
    width:15rem;
  }
  .acd{
    font-size:18px;
  }
  .afig1{
    height:90px;
    width:90px;
  }
  .ares{
    margin-bottom:180px;
    padding-top:120px;
  }
  .atxt4{
    font-size:20px;
  }
  .atxt5{
    font-size:12px;
  }
}
@media only screen and (max-width: 600px) {
  @keyframes snowflakes-shake {
    0%{
      transform: translateX(0px);
    }
  
    50% {
      transform: translateX(35px);
    }
  
    100% {
      transform: translateX(0px);
    }
  }
  .aw1{
    width:20px;
  }
  .aw2{
    width:15px;
  }
  .aw3{
    width:10px;
  }
  .cd1{
    height:140px;
    width:12rem;
  }
  .cd2{
    height:140px;
    width:12rem;
  }
  .acd{
    font-size:16px;
  }
  .afig1{
    height:90px;
    width:90px;
  }
  .ares{
    margin-bottom:180px;
    padding-top:120px;
  }
  .atxt4{
    font-size:18px;
  }
  .atxt5{
    font-size:10.5px;
  }
}
@media only screen and (max-width: 450px) {
  @keyframes snowflakes-shake {
    0%{
      transform: translateX(0px);
    }
  
    50% {
      transform: translateX(28px);
    }
  
    100% {
      transform: translateX(0px);
    }
  }
  .cd1{
    height:130px;
    width:10rem;
  }
  .cd2{
    height:130px;
    width:10rem;
  }
  .acd{
    font-size:14px;
  }
  .afig1{
    height:70px;
    width:70px;
  }
  .ares{
    margin-bottom:180px;
    padding-top:100px;
  }
  .atxt4{
    font-size:14px;
  }
  .atxt5{
    font-size:9px;
  }
}
@media only screen and (max-width: 380px) {
  @keyframes snowflakes-shake {
    0%{
      transform: translateX(0px);
    }
  
    50% {
      transform: translateX(24px);
    }
  
    100% {
      transform: translateX(0px);
    }
  }
  .aw1{
    width:12px;
  }
  .aw2{
    width:9px;
  }
  .aw3{
    width:6px;
  }
  .cd1{
    height:110px;
    width:8rem;
  }
  .cd2{
    height:110px;
    width:8rem;
  }
  .acd{
    font-size:11px;
  }
  .afig1{
    height:60px;
    width:60px;
  }
  .ares{
    margin-bottom:180px;
    padding-top:90px;
  }
  .atxt4{
    font-size:12px;
  }
  .atxt5{
    font-size:7px;
  }
}
@media only screen and (max-width: 415px) {
  .img1{
    height: 48px;
    width: 40px;
  }
  .img2{
    height: 48px;
    width: 48px;
  }
  .img3{
    height: 48px;
    width: 52px;
  }
  .img4{
    height: 48px;
    width: 44px;
  }
  .head3{
    font-size:20px;
  }
  .wwa{
    font-size: 10px;
  }
  .btn1{
    font-size:10px;
    margin-bottom:20px;
  }
}


`}
      </style>
      <Header />
      <div style={{ position: "relative" }} className="main">
        <div style={{ height: '100%', width: '100%', backgroundColor: '#282828', position: 'absolute' }}>
          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">
              <img className="aw1" src="./images/ani2.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw3" src="./images/ani.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw2" src="./images/ani2.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw1" src="./images/ani.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw2" src="./images/ani2.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw3" src="./images/ani.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw1" src="./images/ani2.png" alt="" /></div>
            <div className="snowflake">
              <img className="aw2" src="./images/ani.png" alt="" /></div>
            <div className="snowflake">
              <img className="aw3" src="./images/ani.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw2" src="./images/ani2.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw3" src="./images/ani.png" alt="" />
            </div>
            <div className="snowflake">
              <img className="aw1" src="./images/ani.png" alt="" />
            </div>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: "10000" }} className="part2">
          <h1 style={{ marginTop: '5rem', marginBottom: '5rem', fontSize: "5vw" }}><span id="aani"></span> Get the best things here!</h1>
          <div style={{ marginBottom: '2rem' }} className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <a href="#alink1">
                  <button type="button" className="btn1 btn btn-outline-primary rounded-pill">Who we are?</button>
                </a>
              </div>
              <div className="col-md-3">
                <a href="#alink1">
                  <button type="button" className="btn1 btn  btn-outline-primary rounded-pill">Our Mission?</button>
                </a>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <h2 className="head2">Providing services to be remembered &amp; <br />
            Changing the way we eat out, all this in budget.
          </h2>
          <div id="alink1" className="container ">
            <div className="row justify-content-md-center">
              <div className="col col-md-3 col-sm-6 col-xs-6 justify-content-center" >
                <div className="img1 container" >
                  <div className="row align-items-center  justify-content-center">
                    <img style={{ height: '100%', width: '100%' }} src="./images/great.png" alt="" />
                  </div>
                </div>
                <figcaption className="txt1">Great Places</figcaption>

              </div>
              <div className="col col-md-3 col-sm-6 col-xs-6 justify-content-md-center" >
                <div className="img2 container-fluid" >
                  <div className="row justify-content-md-center">
                    <img style={{ height: '100%', width: '100%' }} src="./images/serving.png" alt="" />
                  </div>
                </div>
                <figcaption className="txt1">Luxury Services</figcaption>

              </div>
              <div className="col col-md-3 col-sm-6 col-xs-6 justify-content-md-center" >
                <div className="img3 container-fluid" >
                  <div className="row justify-content-md-center">
                    <img style={{ height: '100%', width: '100%' }} src="./images/3.png" alt="" />
                  </div>
                </div>
                <figcaption className="txt1">Saves Time</figcaption>

              </div>
              <div className="col col-md-3 col-sm-6 col-xs-6 justify-content-md-center" >
                <div className="img4 container-fluid" >
                  <div className="row justify-content-md-center">
                    <img style={{ height: '100%', width: '100%', marginTop: "10%" }} src="./images/2.png" alt="" />
                  </div>
                </div>
                <figcaption className="txt1">Amazing Offers</figcaption>

              </div>
            </div>
          </div>

        </div>
      </div>
      <div style={{ margin: "40px" }}>
        <h1 className="head3">Who we are?</h1>
        <p className="wwa">
          DoT Restros is a table reservation and pre-ordering platform launched in 2023. We connect restaurants and customers through our platform, the customers can use our services to reserve their table at our partner restaurants and pre-order their meal to save their time. Providing amazing offers, and training employees at our partner restaurants to provide our customers with the best services they can have in budget. Customers can also write reviews and rate the restaurants listed on our platform to share their worthy experience of eating out with other customers.
        </p>
        <h1 className="head3">Our Mission?</h1>
        <p className="wwa">
          Committed to revolutionizing the way of eating out, we strive to provide the best services and deals to our customers at partner restaurants. Pushing the food industry to its best and bringing out new ways to solve problems in the industry. Working on transforming the complete experience from thoughts of eating out to leaving the restaurant. We aim to understand the need of our customers and provide them with the best.
        </p>
        <h1 className="head3">Our Vision?</h1>
        <p className="wwa">
          Our vision is to bring best in class services to every single customer of ours who goes out for eating with friends, family or loved ones by creating DoT Restros a symbol of trust and quality.
        </p>
      </div>
      <div style={{ position: "relative" }}>
        {/* wotking */}
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <div className="container ">
            <div className="row ">
              <div className="col-6 ">
                <div className="card cd1" >
                  <div className="card-body">
                    <h5 className="card-title acd">Trust</h5>
                    <p className="card-text atxt5">
                      We will be fair, clear and tranparent in our activities in order to build trust between our customers, clients and employess
                    </p>
                  </div>
                </div></div>
              <div className="col-6">
                <div className="card cd2" >
                  <div className="card-body">
                    <h5 className="card-title acd">Responsibility</h5>
                    <p className="card-text atxt5">
                      We believe in taking responsibilties of our customers, clients and employees experience to bring out best ecosystem for everyone associated with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="card cd1" >
                  <div className="card-body">
                    <h5 className="card-title acd">Pioneering</h5>
                    <p className="card-text atxt5">
                      We work to innovate and bring in new ideas to solve problems effectively and in a better possible way. Thinking for development in current solutions never stops.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card cd2" >
                  <div className="card-body">
                    <h5 className="card-title acd">Action</h5>
                    <p className="card-text atxt5">
                      To maintain all the previous 3 values we act. Action is the most important value that displays all the other values of the company. We believe in actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="ares">
          <div className=" d-flex align-items-center justify-content-center">
            <div className=" afig1 d-flex align-items-center justify-content-center" >
              <div className="atxt4">Values</div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Aboutus;