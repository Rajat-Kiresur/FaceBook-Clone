import React from "react";
import './Facebook.css';
import {Search} from 'lucide-react';
import { IoPersonSharp } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineRssFeed } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { HiMiniPhoto } from "react-icons/hi2";
import { IoPricetags } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { PiSmileyMeltingFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";


function Fhome() {
    return(
        <div className="main3">
            <div className="nav">
            <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Search for friend's, posts or video" className="searchbar"/>
                <p className="fb">facebook</p>    
                <Search className="searchicon" />
                <p className="hp">HomePage</p>
                <p className="tl">TimeLine</p>
                <IoPersonSharp className="person" />
                <LuMessageSquareText className="msg" />
                <IoMdNotifications  className="bell"/>
          
                <p className="super"> 
                    <sup className="sup1">18</sup>
               </p>

               <p className="super1">
                <sup className="sup2">27</sup>
               </p>
             
               <p className="super2">
                <sup className="sup3">45</sup>
               </p>

               <img className="img" src="/images/rajat.jpeg" alt="" />
            </div>

        
            

            <div className="sidenav">
                <MdOutlineRssFeed className="feed"/> <p className="feed1">Feed</p><br/>
                <BsChatLeftTextFill className="chat" /> <p className="chat1">Chat</p><br/>
                <FaVideo className="video"/><p className="video1">Videos</p><br/>
                <HiMiniUserGroup className="group"/><p className="group1">Groups</p><br/>
                <IoBookmarkSharp className="bookmark"/><p className="bookmark1">Bookmarks</p><br/>
                <BsFillQuestionSquareFill className="question"/><p className="question1">Questions</p><br/>
                <BsFillSuitcaseLgFill className="job"/><p className="job1">Jobs</p><br/>
                <BiSolidCalendarEvent className="event"/><p className="event1">Events</p><br/>
                <FaGraduationCap className="course"/><p className="course1">Courses</p><br/>
                <button className="sm">Show More</button>
                <hr/>
                <img className="bujji" src="/images/bujji.jfif" alt="" /><br/><p className="bujji1">Rajat Kishan</p>
                <img className="vicky" src="/images/vicky.jfif" alt="" /><br/><p className="vicky1">Trivikram</p>
                <img className="hanu" src="/images/hanumanth.jfif" alt="" /><br/><p className="hanu1">Hanumatha</p>
                <img className="dhanu" src="/images/dhanu.jfif" alt="" /><br/><p className="dhanu1">Dhanraj</p>
               </div>

               <div className="caption">
                <img className="img1" src="/images/rajat.jpeg" alt="" />
                <p className="title">What's In Your Mind Rajat!</p>
               <p className="hr"><hr/></p>
               <HiMiniPhoto className="photo" /><p className="photo1">Photo/Video</p>
               <IoPricetags className="tag"/><p className="tag1">Tag</p>
               <FaLocationDot className="loc"/><p className="loc1">Location</p>
               <PiSmileyMeltingFill className="smiley"/><p className="smiley1">Feelings</p>
               <button className="share">Share</button>
               </div>

              
               <div className="feed2">
                <img className="profile" src="images/rajat.jpeg" alt="" />
                <p className="pname">Rajat Kiresur</p>
                <p className="th">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 mins ago</p><br/>
                <p className="zh">Let The Gooood Times Rollll!</p><br/>
                <img className="z9" src="/images/z900.jpeg" alt="" />
                <p><HiDotsVertical /></p>

               </div>

               <img className="bujji2" src="images/bujji.jfif" alt="" /><br/>
               <img className="hanu2" src="images/hanumanth.jfif" alt="" />
               <p className="bday"><b>Bujji</b> and <b>2 Other Friend's</b> Have Birthday Today!</p>
               <img className="mc" src="/images/mc.jfif" alt="" />
              
        </div>
    )

}

export default Fhome;