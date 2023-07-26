import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function OTP() {
   useEffect(() => {
    handleDarkMode();
  }, []);
  return (
    <>
<Header/>  

<Sidebar/>

<section class="form-container">

   <form action="" method="post" enctype="multipart/form-data">
      <h3>OTP Verification</h3>
      <p>Enter OTP:<span>*</span></p>
      <input type="text" name="OTP" placeholder="" required   class="box"/>
      <Link to='/register'></Link> 
      <input type="submit" value="Submit" name="submit" class="btn"/>
      <p>Didn't get OTP? </p>
      <Link to='/resend'> <a  class="btn">Resend OTP</a> </Link> 
   </form>

</section>




<Footer/></>
  );
}

export default OTP;
