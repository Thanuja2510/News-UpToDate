import React,{useState} from 'react'
import axios from 'axios'
export default function newscards(props) {
         console.log(props)
  return (
    <div className='container '>
        <div className='row row-cols-2'>

        
   
      {
        props.newsdata.map((value)=>{
         return(
            <div className="col mb-3 mt-3">
            <div className="card" style={{width: "30rem"}}>
  <img src={value.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Author : {value.author}</li>
   
  </ul>
  <div className="card-body">
  <a href={value.url} class="btn btn-primary">Read More..</a>
  </div>
</div>
</div>
         )
        })
      }
   
    </div>
    </div>
  )
}
