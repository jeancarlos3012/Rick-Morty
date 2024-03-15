import React from 'react'

// eslint-disable-next-line react/prop-types
const LocationCard = ({location}) => {
  return (
    <article className='article_1'>
        <h2>{location?.name}</h2>
       <ul>
        <li><span>Type:</span><span>{location?.type}</span></li>
        <li><span>Dimension:</span><span>{location?.dimension}</span></li>
        <li><span>Population:</span><span>{location?.dimension.length}</span></li>
       </ul>
        </article>
  )
}

export default LocationCard