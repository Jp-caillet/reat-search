import React from 'react'

import List from './components/item'

const list = [
  {
    id: 1,
    name: 'Cyril',
    age: 31
  },
  {
    id: 2,
    name: 'Jp',
    age: 25
  },
  {
    id: 3,
    name: 'React',
    age: 5
  }
]

const ListCore = () => (
  <div>
    <List className="index" list={list} />
  </div>
)

export default ListCore
