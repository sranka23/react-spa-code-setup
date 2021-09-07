import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/home'>
            <h1> React SPA home page </h1>
          </Route>
          <Route path='/about-us'>
            <h1> React SPA info page </h1>
          </Route>
          <Route path='/'>
            <h1> React SPA default page </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
