import React from 'react'

const Card = ({text, classes, clicked}: {text: string, classes: string, clicked: void}) => {
  return (
    <div>{text}</div>
  )
}

export default Card