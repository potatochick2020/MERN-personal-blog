
import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sidebarImage from "./sidebar.JPG" 

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
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
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
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