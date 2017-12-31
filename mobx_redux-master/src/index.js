import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './mobx/TodoList';
import observableTodoStore from "./mobx/observableTodoStore"
import registerServiceWorker from './registerServiceWorker';



import {
  BrowserRouter as Router, Switch, Route, NavLink
} from 'react-router-dom'

const Info = () => (
  <div>
    <h2>Info</h2>
    <p>MobX</p>
    <ul>
    <li>Automaitc</li>
    <li>Object-oriented programming ( It wraps your state into observables)</li>
    <li>State is mutable</li>
    <li>Multiple stores</li>
    
    <img src={require('./info.jpg')} alt="info about MobX"/>
    <img src={require('./MobxBuildingBlocks.png')} alt="Mobx Building Blocks"/>
    
    
  </ul>
  
  
    </div>


)

const MobX = () => <TodoList store={observableTodoStore} />

const Main = () => (
  <Router>
    <div>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/mobx">MobX</NavLink></li>

      </ul>
      <Switch>
        <Route exact path="/" component={Info} />
        <Route path="/mobx" component={MobX} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
