import "./home.css"
import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar"

export default function Home(){
    return(
        <div>
            <Header/>
            <div className="home">
                Homepage
                <SideBar/>
            </div>
        </div>
    )
}