import React from 'react'
import "./profile.css";
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src = "assets/person/hulk.jpg"></img>
            <img className='profileUserImg' src = "assets/person/hulk.jpg"></img>
         </div>
         <div className="profileInfo">
            <h4 className='profileInfoName'>Danny</h4>
            <span className='profileInfoDesc'>Hello there</span>
         </div>
        </div>
        <div className="profileRightBotton">
      <Feed/>
      <Rightbar profile/>
      </div>
    </div> 
    </div>
</>
);  
}
