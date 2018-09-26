import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbare from './navbare'
import List from './list/list.js'
import Search from './search'

const App = () => (
  <div>
    <Navbare />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/home" component={Search} />
      </Switch>
    </BrowserRouter>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
