import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// login css
import "../Register.css"
// icons
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
const Register = (props) => {
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
        if(res.status === 201){
            window.alert("Registration Successful");
            console.log("Registration Successful");
            toggleForm();
            // navigate("/register")
        }
        else if(res.status == 409){
            window.alert("User already exists");
            console.log("User already exists");
        }
        else{
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
    }
    // login states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e)=>{
        e.preventDefault();
        const resp = await fetch("/loginform",{
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
        if(resp.status === 400 || !data){
            window.alert("Invalid Credentials");
        } else{
            window.alert("Login Successful");
            navigate("/");
        }
    }

    return (
        <div>
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form method="POST">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><FaFacebookF /> </a>
                            <a href="/auth/google" className="social"><FaGooglePlusG /></a>
                            <a href="#" className="social"><FaLinkedinIn /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" name="name"
                            value={user.name}
                            onChange={handleInputs} />
                        <input type="email" placeholder="Email" name="email"
                            value={user.email}
                            onChange={handleInputs} />
                        <input type="tel" placeholder="Phone No." name="phoneno"
                            value={user.phoneno}
                            onChange={handleInputs} />
                        <input type="password" placeholder="Password" name="password"
                            value={user.password}
                            onChange={handleInputs} />
                        <input type="password" placeholder="Confirm Password" name="cpassword"
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
        
    );
}

export default Register;