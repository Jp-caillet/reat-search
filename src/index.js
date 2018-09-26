import React from 'react'
import ReactDOM from 'react-dom'
import Search from './search'
import Navbare from './navbare'

const App = () => (
  <div>
    <Navbare />
    <Search />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
