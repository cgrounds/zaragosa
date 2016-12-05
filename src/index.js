import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Shop from './Shop.js'
import Studio from './Studio.js'
import Home from './Home.js'
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="shop" component={Shop}/>
      <Route path="studio" component={Studio}/>
    </Route>

  </Router>,
  document.getElementById('root')
);
