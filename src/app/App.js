import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hall from '../pages/hall'
import Kitchen from '../pages/kitchen'
import NavBar from '../components/navBar'

export default function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/hall" component={Hall}/>
            <Route path="/kitchen" component={Kitchen}/>
          </Switch>
        </div>
      </Router>
    </>
  )
};