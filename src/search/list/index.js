import React, { Component } from 'react'

import Item from './components/item.js'

class List extends Component {
  render() {
    const { list } = this.props

    return (
      <ul>
        {list.map(item => <Item key={item.id} event={item} />)}
      </ul>
    )
  }
}

export default List
