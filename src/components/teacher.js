import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import aboutpic from './images/about-img.svg'
import gold from './images/gold medal.png'
import silver from './images/silver medal.png'
import bronze from './images/bronze medal.png'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function Teacher() {
   useEffect(() => {
    handleDarkMode();
  }, []);
  return (
    <>
<Header/>  

<Sidebar/>

<section class="teachers">

   <h1 class="heading">contributor leaderboard</h1>

   {/* <form action="" method="post" class="search-tutor">
      <input type="text" name="search_box" placeholder="search tutors..." required maxlength="100"/>
      <button type="submit" class="fas fa-search" name="search_tutor"></button>
   </form> */}
<div class="box-container">
<div class="box offer">
         <h3>become a contributor</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
         <Link to='/contributor'> <a  class="inline-btn">Get Started</a> </Link>
      </div>
      </div>

   <main>
      <div id="header">
        <h1>Ranking</h1>
        <button class="share">
          <i class="ph ph-share-network"></i>
        </button>
      </div>
      <div id="leaderboard">
        <div class="ribbon"></div>
        <table>
          <tr>
            <td class="number">1</td>
            <td class="name">Pinda</td>
            <td class="points">
               1000 <img class="gold-medal" src={gold} alt="gold medal"/>
            </td>
          </tr>
          <tr>
            <td class="number">2</td>
            <td class="name">Mayank Yadav</td>
            <td class="points">
               800<img class="silver-medal" src={silver} alt="silver medal"/>
            </td>
          </tr>
          <tr>
            <td class="number">3</td>
            <td class="name">Divya Kaurani</td>
            <td class="points">
               700<img class="bronze-medal" src={bronze} alt="bronze medal"/>
            </td>
          </tr>
          <tr>
            <td class="number">4</td>
            <td class="name">Gaurav Tiwari</td>
            <td class="points">500</td>
          </tr>
          <tr>
            <td class="number">5</td>
            <td class="name">Johnny Sins</td>
            <td class="points">200</td>
          </tr>
        </table>
        <div id="buttons">
          <button class="exit">Exit</button>
          <button class="continue">Continue</button>
        </div>
      </div>
    </main>

</section>

<Footer/>


</>
  );
}

export default Teacher;
