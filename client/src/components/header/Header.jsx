import "./header.css"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
        <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">MongoDB + ExpressJS + ReactJS + NodeJS</span>
            <span className="headerTitleLg">Noka's World</span>
        </div>
        <img
            className="headerImg"
            src="./headerbanner.jpg"
            alt=""
        />
        </div>
        </>
    )
}