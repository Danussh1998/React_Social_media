import React, { useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { users } from '../../dummyData';

export default function Post({post}) {
   const [like , setLike] = useState(post.like)
   const [isLiked , setIsLiked] = useState(false)
   const likehandler = () => {
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
   }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className = "postProfileImg" src = {users.filter(u => u.id=== post.userId)[0].profilePicture}/>
                    <span className="postUsername">{users.filter(u => u.id=== post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className = 'postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <FavoriteIcon className = 'likeIcon' htmlColor='red' onClick = {likehandler}/>
                <ThumbUpAltIcon className = 'likeIcon' htmlColor='blue' onClick = {likehandler}/>
                <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
