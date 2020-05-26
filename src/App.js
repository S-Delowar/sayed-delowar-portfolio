import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Projects from './Component/Projects/Projects';
import Blog from './Component/Blog/Blog';
import AboutMe from './Component/AboutMe/AboutMe';
import Contact from './Component/Contact/Contact';
import Resume from './Component/Resume/Resume';
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import HeaderTest from './Component/Header/HeaderTest/HeaderTest';

function App() {
  document.body.style = 'background: #292b2c;'
  return (
    <div className="main-body">
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/about'>
            <AboutMe></AboutMe>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path='*'>
             <NotFound></NotFound>
           </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
