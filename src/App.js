import React from 'react';
import Header from'./components/Header.js'
import Footer from './components/Footer.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Mainpage from './components/Mainpage.js';
import Categories from './routes/categories.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
function App() {
  //console.log("app.js")
  return (
    <div className="App">
     <Router>
     <Header />
     <Routes>
      <Route exact path="/" element={<Mainpage />}/>
      <Route exact path="/Technology" element={<Mainpage cat="technology" />}/>
      <Route exact path="/TopNews" element={<Mainpage cat="general" />}/>
      <Route exact path="/Business" element={<Mainpage cat="business" />}/>
      <Route exact path="/Entertainment" element={<Mainpage cat="entertainment" />}/>
     </Routes>
     </Router>
     
    
     
    </div>
  );
}

export default App;
