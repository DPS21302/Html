import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import profilepic from './images/pic-1.jpg'
import thumb from './images/thumb-1.png'
import aboutpic from './images/about-img.svg'
import videodisplay from './images/vid-1.mp4'
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";



function WatchVideo() {
  
  
   useEffect(() => {
      handleDarkMode();
    }, []);
  return (
    <>

<Header/>  

<Sidebar/>

<section class="watch-video">

   <div class="video-container">
      <div class="video">
         <video src={videodisplay} controls poster={thumb} id="video"></video>
      </div>
      <h3 class="title">complete HTML tutorial (part 01)</h3>
      <div class="info">
         <p class="date"><i class="fas fa-calendar"></i><span>22-10-2022</span></p>
         <p class="date"><i class="fas fa-heart"></i><span>44 likes</span></p>
      </div>
      <div class="tutor">
         <img src={profilepic} alt=""/>
         <div>
            <h3>john deo</h3>
            <span>developer</span>
         </div>
      </div>
      <form action="" method="post" class="flex">
      <Link to='/playlist'>   <a  class="inline-btn">view playlist</a> </Link>
         <button><i class="far fa-heart"></i><span>like</span></button>
      </form>
      <p class="description">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
      </p>
   </div>

{/* <div className="viewer">
          <Worker
            workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js"
          >
            <Viewer
              fileUrl={pdfFilePath}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div> */}

</section>

<section class="comments">

   <h1 class="heading">5 comments</h1>

   <form action="" class="add-comment">
      <h3>add comments</h3>
      <textarea name="comment_box" placeholder="enter your comment" required maxlength="1000" cols="30" rows="10"></textarea>
      <input type="submit" value="add comment" class="inline-btn" name="add_comment"/>
   </form>

   <h1 class="heading">user comments</h1>

   <div class="box-container">

      <div class="box">
         <div class="user">
            <img src={profilepic} alt=""/>
            <div>
               <h3>shaikh anas</h3>
               <span>22-10-2022</span>
            </div>
         </div>
         <div class="comment-box">this is a comment form shaikh anas</div>
         <form action="" class="flex-btn">
            <input type="submit" value="edit comment" name="edit_comment" class="inline-option-btn"/>
            <input type="submit" value="delete comment" name="delete_comment" class="inline-delete-btn"/>
         </form>
      </div>

      <div class="box">
         <div class="user">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>22-10-2022</span>
            </div>
         </div>
         <div class="comment-box">awesome tutorial!
            keep going!</div>
      </div>

      <div class="box">
         <div class="user">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>22-10-2022</span>
            </div>
         </div>
         <div class="comment-box">amazing way of teaching!
            thank you so much!
         </div>
      </div>

      <div class="box">
         <div class="user">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>22-10-2022</span>
            </div>
         </div>
         <div class="comment-box">loved it, thanks for the tutorial!</div>
      </div>

      <div class="box">
         <div class="user">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>22-10-2022</span>
            </div>
         </div>
         <div class="comment-box">this is what I have been looking for! thank you so much!</div>
      </div>

      <div class="box">
         <div class="user">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>22-10-2022</span>
            </div>
         </div>
         <div class="comment-box">thanks for the tutorial!

            how to download source code file?
         </div>
      </div>

   </div>

</section>














<Footer/>


</>
  );
}

export default WatchVideo;
