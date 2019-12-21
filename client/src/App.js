import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainbackground from './components/layouts/MainBackground';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Mainbackground />
      </Router>
    </Fragment>
  );
}

export default App;
