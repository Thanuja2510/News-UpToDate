import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Newscards from './newscards'
const Mainpage=({cat})=> {
    const [newsdata,setnewsdata]= useState([])
    const Mainpage = async()=>{
        await axios.get(
          cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=a761bda30b6f47d08501cd02a8292cc5`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=a761bda30b6f47d08501cd02a8292cc5"
          )
        .then((resp)=>{
            console.log(resp)
            setnewsdata(resp.data.articles)
        })
    }
    useEffect(()=>{
     Mainpage();
    },[cat])
   
  return (
  
    <div>
        <Newscards newsdata={newsdata}/>
    </div>
  )
}
export default Mainpage;