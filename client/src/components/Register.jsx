import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// login css
// import "../Register.css"
// icons
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { UserContext } from '../App';
// import Header from "./Header";
import Header from './Header';
const Register = (props) => {

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    // toggle login/signup
    const [isSignUp, setIsSignUp] = useState(false);
    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };
    // register form
    const [user, setUser] = useState({
        name: "", email: "", phoneno: "", password: "", cpassword: ""
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phoneno, password, cpassword } = user;
        const res = await fetch("/registerform", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phoneno, password, cpassword
            }),
        })
        const data = await res.json();
        // if (res.status === 422) {
        //     window.alert("Invalid Credentials");
        //     console.log("Invalid Credentials");
        // }
        if (res.status === 201) {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            toggleForm();
            // navigate("/register")
        }
        else if (res.status == 409) {
            window.alert("User already exists");
            console.log("User already exists");
        }
        else {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
    }
    // login states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const resp = await fetch("/loginform", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = resp.json();
        if (resp.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            dispatch({type:"USER", payload:true})
            window.alert("Login Successful");
            navigate("/");
        }
    }

    return (
        <>
        <style>
            {`@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: #282828;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: -20px 0 50px;
		margin-top: 20px;
}

h1 {
    font-weight: bold;
    margin: 0;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: .5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

.container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.form-container form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding:  0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

.form-container input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

button {
    border-radius: 20px;
    /* border: 1px solid #ff4b2b;
    background: #ff445c; */
    border: 1px solid #2A88DF;
    background: #2A88DF;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background: transparent;
    border-color: #fff;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all .6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .6s ease-in-out;
    z-index: 100;
}

.overlay {
    background: #2A88DF;
    /* background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 / cover; */
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateY(0);
    transition: transform .6s ease-in-out;
}

.overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateY(0);
    transition: transform .6s ease-in-out;
}

.overlay-right {
    right: 0;
    transform: translateY(0);
}

.overlay-left {
    transform: translateY(-20%);
}

/* Move signin to right */
.container.right-panel-active .sign-in-container{
    transform: translateY(100%);
}

/* Move overlay to left */
.container.right-panel-active .overlay-container{
    transform: translateX(-100%);
}

/* Bring signup over signin */
.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

/* Move overlay back to right */
.container.right-panel-active .overlay {
    transform: translateX(50%);
}

/* Bring back the text to center */
.container.right-panel-active .overlay-left {
    transform: translateY(0);
}

/* Same effect for right */
.container.right-panel-active .overlay-right{
    transform: translateY(20%);
}

.footer {
	margin-top: 25px;
	text-align: center;
    color: #fff;
}


.icons {
	display: flex;
	width: 30px;
	height: 30px;
	letter-spacing: 15px;
	align-items: center;
}

.soc{
    color: #000;
}
.rtxt1{
    font-size:8px;
}
input::placeholder{
    font-weight: 300;
  }
.rh1{
    font-size:30px;
}
`}

        </style>
        <Header/>
        <div>
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form method="POST">
                        <h1 className='rh1'>Create Account</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><FaFacebookF /> </a>
                            <a href="/auth/google" className="social"><FaGooglePlusG /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div> */}
                        <span>or use your email for registration</span>
                        <input className='rtxt1' type="text" placeholder="Name" name="name"
                            value={user.name}
                            onChange={handleInputs} />
                        <input className='rtxt1'  type="email" placeholder="Email" name="email"
                            value={user.email}
                            onChange={handleInputs} />
                        <input className='rtxt1' type="tel" placeholder="Phone No." name="phoneno"
                            value={user.phoneno}
                            onChange={handleInputs} />
                        <input className='rtxt1' type="password" placeholder="Password" name="password"
                            value={user.password}
                            onChange={handleInputs} />
                        <input className='rtxt1' type="password" placeholder="Confirm Password" name="cpassword"
                            value={user.cpassword}
                            onChange={handleInputs} />
                        <button onClick={PostData}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form method="POST">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <Link className="social"><FaFacebookF /></Link>
                            <a href="/auth/google" className="social"><FaGooglePlusG /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Password" name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#">Forgot your password?</a>
                        <button
                            onClick={loginUser} >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost toggle-btn" onClick={toggleForm} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost toggle-btn" onClick={toggleForm} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <b> Follow me on </b>
                <div className="icons">
                    <a href="https://github.com/kvaibhav01" target="_blank" className="social soc"><i className="fab fa-github" /></a>
                    <a href="https://www.instagram.com/vaibhavkhulbe143/" target="_blank" className="social soc"><i className="fab fa-instagram" /></a>
                    <a href="https://medium.com/@vaibhavkhulbe" target="_blank" className="social soc"><i className="fab fa-medium" /></a>
                    <a href="https://twitter.com/vaibhav_khulbe" target="_blank" className="social soc"><i className="fab fa-twitter-square" /></a>
                    <a href="https://linkedin.com/in/vaibhav-khulbe/" target="_blank" className="social soc"><i className="fab fa-linkedin" /></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;