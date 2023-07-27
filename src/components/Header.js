

import React from 'react'
import {Link} from 'react-router-dom'

 function Header() {
  return (
    <div style={{backgroundColor : "#778899"}}>

    
    <div className='text-center ' style={{fontFamily : "Russo One"}}>
        <h1 style={{fontSize: "60px"}}>News APP</h1>
        <br></br>
        <h5 style={{fontFamily:"AmstelvarAlpha"}}><b>THE WEBSITE BUILT USING NEWS API</b></h5>
        <br></br>
       
    </div>
    <nav class="navbar navbar-expand-lg " style={{backgroundColor : "#778899"}}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="#"><h3>News Updates</h3></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
      <li class="nav-item me-2">
          <Link class="nav-link active" aria-current="page" to="/"><h4>Home</h4></Link>
        </li>
        
        <li class="nav-item me-2">
          <Link class="nav-link active" aria-current="page" to="/TopNews"><h4>TopNews</h4></Link>
        </li>
        
        <li class="nav-item me-2">
          <Link class="nav-link active" aria-current="page" to="/Technology"><h4>Technology</h4></Link>
        </li>
        
        <li class="nav-item me-2">
          <Link class="nav-link active" aria-current="page" to="/Business"><h4>Business</h4></Link>
        </li>
        <li class="nav-item me-2">
          <Link class="nav-link active" aria-current="page" to="/Entertainment"><h4>Entertainment</h4></Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
export default Header;