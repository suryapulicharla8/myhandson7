// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Router,Route } from 'react-router-dom';
// import Edit from './Edit';
// import Table from './Table';
// import store from './app/store';
// import { Provider } from 'react-redux';
import About from './About';
// import Add from './Add';
// import store from './app/store'
import Contact from './Contact';
// import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <h1> React Handson7</h1>
      {/* <Navbar/> */}
      <Contact/>
      {/* <Add/> */}
      <About/>
      {/* <Edit/> */}
      {/* <Table/> */}
      {/* <BrowserRouter>
        <Router>
          <Route path='/table' element={<Table/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          

        </Router>
      </BrowserRouter> */}
      

    </div>
  );
}

export default App;
