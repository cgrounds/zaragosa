import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Shop from './Shop.js'
import Studio from './Studio.js'
import Home from './Home.js'
import Clint from './Clint.js'
import Hattie from './Hattie.js'
import Raud from './Raud.js'
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="shop" component={Shop}/>
      <Route path="shop/clint" component={Clint} />
      <Route path="shop/hattie" component={Hattie} />
      <Route path="shop/raud" component={Raud} />
      <Route path="studio" component={Studio}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
