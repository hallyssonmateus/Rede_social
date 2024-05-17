import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/person3.jpg" alt="perfilperson"/>
                    <span className="postUsername">Julia Andrade</span>
                    <span className="postDate">5 minuts ago</span>
                </div>
                <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey Humans! it's my firt post in my social media.</span>
                <img className="postImg" src="/assets/post/post1.jpg" alt="post1" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/liked.png" alt="likedlogo"/>
                    <img className="likeIcon" src="assets/heart.png" alt="heartlogo" />
                    <span className="postLikeCounter">32 people liked it.</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
