import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function Courses() {
   useEffect(() => {
      handleDarkMode();
    }, []);
  return (
    <>

<Header/>  

<Sidebar/>

<section class="courses">

   <h1 class="heading">our courses</h1>

   <div class="box-container">

      <div class="box">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete HTML tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src="images/pic-3.jpg" alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete CSS tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src={thumb}alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete JS tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete Boostrap tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete JQuery tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete SASS tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete PHP tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete MySQL tutorial</h3>
         <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

      <div class="box">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div class="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div class="thumb">
            <img src={thumb} alt=""/>
            <span>10 videos</span>
         </div>
         <h3 class="title">complete react tutorial</h3>
        <Link to='/playlist'> <a  class="inline-btn">view playlist</a> </Link>
      </div>

   </div>

</section>

<Footer/>


</>
  );
}

export default Courses;
