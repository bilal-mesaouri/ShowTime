import React from 'react'
import './suggestion.css'

function Suggestion(props) {
  return (
    <div className='suggestion'>{props.title}</div>
  )
}

export default Suggestion