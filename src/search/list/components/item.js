import React, { Component } from 'react'

class Item extends Component {
  handleOnClick(e) {
    alert(e.currentTarget.textContent)
  }

  render() {
    const { event } = this.props

    return (<li onClick={e => this.handleOnClick(e)}>{`${event.title} `}</li>)
  }
}

export default Item
