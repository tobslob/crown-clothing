import React from 'react';
import HomePage from './components/pages/homepage/Homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom';

const HatPage = (props) => (
  <div>
    {console.log(props)}
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
