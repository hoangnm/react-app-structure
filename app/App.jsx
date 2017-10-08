import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import TodoList from './containers/TodoList.container';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <Redirect to="/todos" />} />
      <Route path="/todos" component={TodoList} />
    </div>
  </Router>
);

export default App;
