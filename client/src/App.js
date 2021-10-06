import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Nav from './components/Nav/Nav';
//import './App.css';

function App() {
  return (

    <Router>
       <Nav />
      <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />

      </Switch>
    </Router>

  );
}

export default App;

/* 
<Router>
      <Nav />
      <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />

      </Switch>
    </Router>
*/