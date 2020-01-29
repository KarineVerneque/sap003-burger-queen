import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hall from '../pages/Hall'
import Kitchen from '../pages/Kitchen'
import NavBar from '../components/NavBar'

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/hall" component={Hall}/>
          <Route path="/kitchen" component={Kitchen}/>
        </Switch>
      </Router>
    </>
  )
};