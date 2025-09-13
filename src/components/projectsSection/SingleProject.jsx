import React from 'react'

const SingleProject = ({name, year,align, image, link}) => {
  return (
    <div>
        <div>
            <h2>{ name }</h2>
            <h2>{year}</h2>
            <a href="" >View</a>
        </div>
        <div></div>
    </div>
  )
}

export default SingleProject