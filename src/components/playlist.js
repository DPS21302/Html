import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import postpic from './images/post-1-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function Playlist() {
   useEffect(() => {
      handleDarkMode();
    }, []);
  return (
    <>

<Header/>

<Sidebar/>

<section class="playlist-details">

   <h1 class="heading">playlist details</h1>

   <div class="row">

      <div class="column">
         <form action="" method="post" class="save-playlist">
            <button type="submit"><i class="far fa-bookmark"></i> <span>save playlist</span></button>
         </form>
   
         <div class="thumb">
            <img src={thumb}alt=""/>
            <span>10 videos</span>
         </div>
      </div>
      <div class="column">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
   
         <div class="details">
            <h3>complete HTML tutorial</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
       <Link to='/teacherProfile' >   <a href="teacher_profile.html" class="inline-btn">view profile</a> </Link> 
         </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">playlist videos</h1>

   <div class="box-container">

   <Link to='/watchvideo' >  <a class="box" >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>complete HTML tutorial (part 01)</h3>
      </a> </Link>

      <Link to='/watchvideo' >  <a class="box" >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>complete HTML tutorial (part 02)</h3>
      </a> </Link>
      <Link to='/watchvideo' >  <a class="box" >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>complete HTML tutorial (part 03)</h3>
      </a> </Link>

      <Link to='/watchvideo' >  <a class="box" >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>complete HTML tutorial (part 04)</h3>
      </a> </Link>

      <Link to='/watchvideo' >  <a class="box" >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>complete HTML tutorial (part 05)</h3>
      </a> </Link>

  <Link to='/watchvideo' >  <a class="box" >
         <i class="fas fa-play"></i>
         <img src={postpic} alt=""/>
         <h3>complete HTML tutorial (part 06)</h3>
      </a> </Link>

   </div>

</section>


<Footer/>


</>
  );
}

export default Playlist;
