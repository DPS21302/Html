import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function Login() {
   useEffect(() => {
    handleDarkMode();
  }, []);
  return (
    <>
<Header/>  

<Sidebar/>

<section class="form-container">

   <form action="" method="post" enctype="multipart/form-data">
      <h3>Login Now</h3>
      <p>Your Email <span>*</span></p>
      <input type="email" name="email" placeholder="Enter your email" required maxlength="50" class="box"/>
      <p>Your Password <span>*</span></p>
      <input type="password" name="pass" placeholder="Enter your password" required maxlength="20" class="box"/>
      <Link to='/ForgotPassword'> <p>Forgot Password?</p> </Link> 
      <input type="submit" value="login new" name="submit" class="btn"/>
      <p>Don't have an account? </p>
      <Link to='/register'> <a  class="btn">Register</a> </Link> 
   </form>

</section>




<Footer/></>
  );
}

export default Login;
