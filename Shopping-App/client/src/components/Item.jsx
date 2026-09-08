import React from 'react'
import image from '../assets/react.svg'
import './Item.css'
const Item = ({props}) => {
  return (
    <div className='item'>
        <img src={image} width={100} height={100} alt="Item Image" />
        <h2>Title:{props.title}</h2>
        <h3>Price:{props.price}</h3>
        <button>Add to Cart</button>     
    </div>
  )
} 

export default Item
