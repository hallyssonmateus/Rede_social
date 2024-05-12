import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/person3.jpg" alt="imgfriend1"/>
            <span className="sidebarFriendName">Me</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/person2.jpg" alt="imgfriend1"/>
            <span className="sidebarFriendName">Andressa Martins</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/person1.jpg" alt="imgfriend1"/>
            <span className="sidebarFriendName">Najila Andrade</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/person4.jpg" alt="imgfriend1"/>
            <span className="sidebarFriendName">Roberto Carlos</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
