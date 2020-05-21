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

function App() {
  return (
    <div>
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
          <Route path='/resume'>
            <Resume></Resume>
          </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path='*'>
             <NotFound></NotFound>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
