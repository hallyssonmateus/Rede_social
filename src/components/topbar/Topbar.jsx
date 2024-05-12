import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">SocialConnect</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <input placeholder="Search for friends, post or videos" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <img src="./assets/person/person3.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
