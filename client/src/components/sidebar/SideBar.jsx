
import "./sidebar.css";
import sidebarImage from "./sidebar.JPG" 
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={sidebarImage}
          alt=""
        />
        <p>
          A year 2 Information technology management for business student. I like everything related to technology. Hope this blog will inspire you a bit! 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
              Data Struct & Algo
            
          </li>
          <li className="sidebarListItem">
           
              Distributed System
            
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">TAGS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
              C++
            
          </li>
          <li className="sidebarListItem">
           
              GoLang
            
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME <s>BACK HOME</s></span>
        <div className="sidebarSocial">
          <i class="fa fa-linkedin sidebarIcon" aria-hidden="true"></i>
          <i class="fa fa-youtube sidebarIcon" aria-hidden="true"></i>
          <i class="fa fa-envelope sidebarIcon" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}