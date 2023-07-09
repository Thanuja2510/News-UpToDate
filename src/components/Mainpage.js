import React,{useState} from 'react'
import axios from 'axios'
import Newscards from './newscards'
export default function Mainpage() {
    const [newsdata,setnewsdata]= useState([])
    const getNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=a761bda30b6f47d08501cd02a8292cc5")
        .then((resp)=>{
            console.log(resp)
            setnewsdata(resp.data.articles)
        })
    }

  return (
    <div>
        <button className='btn-btn-primary' onClick={getNews}> Display News </button>
       <Newscards newsdata={newsdata}/>
    </div>
  )
}
