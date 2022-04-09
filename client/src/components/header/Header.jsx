import "./header.css"
import headerImage from "./header.JPG" 

export default function Header(){
    return (
        <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">MongoDB + ExpressJS + ReactJS + NodeJS</span>
            <span className="headerTitleLg">Noka's World</span>
        </div>
        <img
            className="headerImg"
            src={headerImage}
            alt=""
        />
    </div>
    )
}