import React from 'react';
import Home from './component/home.js';
import About  from'./component/about.js';
import Contact from'./component/contact.js';
import Error from'./component/Error.js';
import { BrowserRouter as Router,Routes,Route,Link  } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <h1>Amina</h1>
          <Link to ={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/Error'}>Error</Link>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/' element={<About/>}></Route>
            <Route path='/' element={<Contact/>}></Route>
            <Route path='/' element={<Error/>}></Route>
          </Routes>
      </div>
    </Router>

  );
}

export default App;