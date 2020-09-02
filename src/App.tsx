import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import Login from './component/Login';
import todoItem from './component/todoList/todoItem';

const App: React.SFC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/item' component={todoItem} /> 
        <Route path='/login' component={Login} />
        <Redirect from='/login' exact to='/login'/>
      </Switch>
    </Router>
  );
}

export default App;
