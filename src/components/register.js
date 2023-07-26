import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function Register() {
   useEffect(() => {
    handleDarkMode();
  }, []);
  return (
    <>
<Header/>  

<Sidebar/>

<section class="form-container">

   <form action="" method="post" enctype="multipart/form-data">
      <h3>Register Now</h3>
      <p>Your Name <span>*</span></p>
      <input type="text" name="name" placeholder="Enter your name" required maxlength="50" class="box"/>
      <p>Your Email <span>*</span></p>
      <input type="email" name="email" placeholder="Enter your email" required maxlength="50" class="box"/>
      <p>Your Password <span>*</span></p>
      <input type="password" name="pass" placeholder="Enter your password" required maxlength="20" class="box"/>
      <p>Confirm Password <span>*</span></p>
      <input type="password" name="c_pass" placeholder="Confirm your password" required maxlength="20" class="box"/>
      <p>College <span>*</span></p>
      <input type="text" name="college" placeholder="Enter your college name" required maxlength="20" class="box"/>
      <p>Semester <span>*</span></p>
      <input type="number" name="semester" placeholder="Enter your semester" required maxlength="20" class="box"/>
      <p>Gender <span>*</span></p>
      <select id="dropdown" name="gender" placeholder="Gender" required maxlength="20" class="box">
      <option value=" ">Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Prefernottosay">Prefer Not To Say</option>
      </select>
      <p>Select Profile </p>
      <input type="file" accept="image/*"  class="box"/>
      <Link to="/OTP"><input type="submit" value="register new" name="submit" class="btn" /></Link>
      <p>Already have an account? </p>
      <Link to='/login'> <a  class="btn">Login</a> </Link> 
   </form>

</section>


<Footer/>
</>
  );
}

export default Register;
