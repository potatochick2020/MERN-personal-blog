import "./header.css"
import headerImage from "./headerbanner.JPG" 
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
        <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm font-medium drop-shadow">MongoDB + ExpressJS + ReactJS + NodeJS</span>
            <a className="headerTitleLg font-extrabold drop-shadow"><Link to="/">Noka's World</Link></a>
        </div>
        <img
            className="headerImg"
            src={headerImage}
            alt=""
        />
        </div>
        </>
    )
}