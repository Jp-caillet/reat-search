import React, { Component } from 'react'

class List extends Component {
  render() {
    const { list } = this.props

    return (
      <ul>
        {list.map(item => <li key={item.id}>{`${item.name} ${item.age}`}</li>)}
      </ul>
    )
  }
}

export default List
