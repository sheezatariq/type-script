import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import Login from './component/Login';
import Item from './component/itemlist/item';

const App: React.SFC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/item' component={Item} /> 
        <Route path='/' component={Login} />
        <Redirect from='/login' exact to='/login'/>
      </Switch>
    </Router>
  );
}

export default App;
