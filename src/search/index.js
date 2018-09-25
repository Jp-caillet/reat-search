import axios from 'axios'
import React, { Component } from 'react'

import initialState from './initial-state'
import List from './list/index.js'

class Search extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  componentDidMount() {
    const { data } = this.state

    console.log('started data --->', data)
  }

  componentWillUpdate() {
    const { data } = this.state

    console.log('updated data --->', data)
  }

  /**
   * Get data
   * @param {string} query
   * @return {Object} dataFormatted
   */
  getData(query) {
    const apiUrl = `https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&q=${query}`

    axios.get(apiUrl)
      .then((response) => {
        this.state.data = this.formatEvents(response.data.records)

        this.forceUpdate()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      dateEnd: event.fields.date_end,
      dateStart: event.fields.date_start,
      description: event.fields.description,
      image: event.fields.image,
      title: event.fields.title
    }))
  }

  handleChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { data } = this.state
    const { filter } = this.state
    return (
      <div>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={this.handleChange.bind(this)}
        />
        <button type="button" onClick={() => this.getData(filter)}>Hello</button>
        <List className="index" list={data} />
      </div>
    )
  }
}

export default Search
