import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import useDarkMode from "./Darkmode";
import handleDarkMode from "./Darkmode";

function Profile() {
    useEffect(() => {
    
        handleDarkMode();
        
      }, []);
  return (
    <>
<Header/> 

<Sidebar/>

<section class="user-profile">

   <h1 class="heading">your profile</h1>

   <div class="info">

      <div class="user">
         <img src={profilepic} alt=""/>
         <h3>Darshit Sojitra</h3>
         <p>student</p>
         <Link to='/updateprofile'> <a  class="inline-btn">Update Profile</a> </Link>
      </div>
   
      <div class="box-container">
   
         <div class="box">
            <div class="flex">
               <i class="fas fa-bookmark"></i>
               <div>
                  <span>4</span>
                  <p>saved playlist</p>
               </div>
            </div>
            <a href="#" class="inline-btn">view playlists</a>
         </div>
   
         <div class="box">
            <div class="flex">
               <i class="fas fa-heart"></i>
               <div>
                  <span>33</span>
                  <p>videos liked</p>
               </div>
            </div>
            <a href="#" class="inline-btn">view liked</a>
         </div>
   
         <div class="box">
            <div class="flex">
               <i class="fas fa-comment"></i>
               <div>
                  <span>12</span>
                  <p>videos comments</p>
               </div>
            </div>
            <a href="#" class="inline-btn">view comments</a>
         </div>
   
      </div>
   </div>

</section>



<Footer/>
</>
  );
}

export default Profile;