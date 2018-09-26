import React from 'react'

const Item = ({ data }) => (
  <div>
    {data.map(item => (
      <div key={item.id}>
        <div className="title">
          {`${item.title} ${item.datasetid} :`}
        </div>
        <img src={item.image} alt="img-event" className="imgresult" />
      </div>
    ))}
  </div>
)

export default Item
