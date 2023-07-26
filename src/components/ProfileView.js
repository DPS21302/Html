import React, { useEffect, useState } from "react";
import profilepic from './images/pic-1.jpg';
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function ProfileView({ userData }) {
  useEffect(() => {
    handleDarkMode();
  }, []);

  return (
    <>
    <Header />
      <Sidebar />
    <div>
      <h2>Profile View</h2>
      <div className="viewprofile">
      <img src={profilepic} className="image" alt="" />
        <h3>Name: divya</h3>
        <p>Email: kauranidivya@gmail.com</p>
        <p>College: ldrp</p>
        <p>Semester: 5</p>
        <p>Gender: female</p>
        <p>Birthdate: 20-03-2004</p>
        <p>LinkedIn URL: divya_kaurani</p>
        <p>Github URL: divya_kaurani</p>
        <p>Portfolio URL: divya_kaurani</p>
        <p>Coding URL: divya_kaurani</p>
        <p>About Me: divya_kaurani</p>
        <p>Skills: smile</p>
        <p>CPI: 9.11</p>
        <p>Hobbies: smile</p>
        <p>Goals/Interests: google</p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ProfileView;
