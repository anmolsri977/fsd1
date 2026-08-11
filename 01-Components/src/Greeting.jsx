import React from 'react'

const Greeting = (props) => {
  return (
    <div>
        <h3>Good Morning {props.name} . You are {props.age} years old.</h3> 
    </div>
  )
}

export default Greeting