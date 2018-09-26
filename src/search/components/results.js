import React from 'react'

const Results = ({ data }) => (
  <div>
    {data.map(item => (
      <div key={item.id}>
        <div className="title">
          {`${item.title} :`}
        </div>
        <img src={item.image} alt="img-event" className="imgresult" />
      </div>
    ))}
  </div>
)

export default Results
