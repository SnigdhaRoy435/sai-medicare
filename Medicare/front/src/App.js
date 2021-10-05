import React from 'react';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';
import TopHeader from "../src/components/Top-Header";
import Header from "../src/components/Header";
import Footer from '../src/components/Footer';
import Register from './Auth/Register';
import Login from './Auth/Login';
import LoginError from './Auth/LoginError';
import Admin from './pages/Admin'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <TopHeader />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/login-error" component={LoginError}></Route>
        <Route exact path="/admin/:id/dashboard" component={Admin}></Route>
        <Footer />

      </Router>
    </>
  )
}

export default App;