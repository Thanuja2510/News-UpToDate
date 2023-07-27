import React,{useState} from 'react'
import axios from 'axios'

const setdefaultimage=(event)=>{
  var imgdefault=event.target;
   imgdefault.src = "../default.jpeg";
  imgdefault.alt="No image provided"
}


export default function newscards(props) {
         console.log(props)
  return (
    <div className='container '>
        <div className='row row-cols-2'>

        
   
      {
        props.newsdata.map((value)=>{
          var imgurl=value.urlToImage;
          var p2 = Object.create(null);
          console.log(imgurl);
          //imgurl=String.valueOf(imgurl.getPropertyAsString(0))
          console.log(typeof(imgurl));
          //JSON.stringify(imgurl);
          console.log(imgurl);
          console.log(typeof(imgurl));
          if(typeof(imgurl)!="string")
          {
            imgurl="default.jpeg";
            console.log(imgurl);
            console.log("ifcase");
            console.log(typeof(imgurl));
          }
         return(
            <div className="col mb-3 mt-3">
            <div className="card" style={{width: "30rem"}}>
  <img src={imgurl} className="card-img-top" alt="no image"  />
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
