import React from 'react';
import Header from'./components/Header.js'
import Newscards from './components/newscards.js'
import Footer from './components/Footer.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Mainpage from './components/Mainpage.js';
function App() {
  //console.log("app.js")
  return (
    <div className="App">
     
     <Header />
    <Mainpage />
     <Footer/>
    </div>
  );
}

export default App;
