import "./home.css"
import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar"
import Posts from "../../components/posts/Posts"
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function Home(){
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
    return(
        <>
            <Header/>
            <div className="home">
               <SideBar/> 
               <Posts posts={posts}/>
                
            </div>
        </>
    )
}