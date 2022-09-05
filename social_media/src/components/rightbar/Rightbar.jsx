import React from 'react'
import { users } from '../../dummyData'
import "./rightbar.css"
import Online from '../online/Online'
import CloseFriend from '../closeFriend/CloseFriend'

export default function Rightbar({profile}) {
  const HomeRightbar = () => (
    <>
         <div className="birthdayContainer">
          <span className='birthdayText'>
           <img className='birthdayImg' src='/assets/person/giftbox.png'/>
           <b>Hulk</b> and <b>three others </b>have birthday today
          </span>
         </div>
         <img className='rightbarAd' src='assets/person/adds.jpg'/>
         <h4 className="rightbarTitle">Online friends</h4>
         <ul className="rightbarFriendList">
             {users.map ((u) => (
               <Online key={u.id} user = {u}/>
             ))}
         </ul>
    </>
  )

  const ProfileRightBar = () =>{
    return (
      
      <>
      <h1 className='ightbarTitle'>User informantion</h1>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Country :</span>
          <span className="rightbarInfoKey">Bangalore</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City :</span>
          <span className="rightbarInfoKey">Bangalore</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship :</span>
          <span className="rightbarInfoKey">Single</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Qualification :</span>
          <span className="rightbarInfoKey">Junior Developer</span>
        </div>
       </div>
       <h4 className="rightbarTitle">User friends</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/IronMan.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Iron Man</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/IronMan.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Iron Man</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/IronMan.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Iron Man</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/IronMan.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Iron Man</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/IronMan.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Iron Man</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/IronMan.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Iron Man</span>
        </div>
       </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
     <div className="rightbarWrapper">
      {profile ? <ProfileRightBar/> : <HomeRightbar/>}
     </div>
    </div>
  )
}
