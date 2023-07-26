import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function ResetPassword() {
   useEffect(() => {
    handleDarkMode();
  }, []);
  return (
    <>
<Header/>  

<Sidebar/>

<section class="form-container">

   <form action="" method="post" enctype="multipart/form-data">
      <h3>Reset Password</h3>
      <p>Enter Password <span>*</span></p>
      <input type="password" name="pass" placeholder="Enter password" required maxlength="50" class="box"/>
      <p>Confirm Password <span>*</span></p>
      <input type="password" name="cpass" placeholder="Confirm password" required maxlength="20" class="box"/>
      {/* <Link to='/register'> <p>Forgot Password?</p> </Link> 
      <input type="submit" value="login new" name="submit" class="btn"/>
      <p>Don't have an account? </p> */}
      <Link to='/login'> <a  class="btn">Reset Password</a> </Link> 
   </form>

</section>




<Footer/></>
  );
}

export default ResetPassword;
