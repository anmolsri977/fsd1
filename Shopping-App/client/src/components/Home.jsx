import React from 'react'
import Item from './Item'
const Home = () => {
    const itemData=[
        {image:"",title:"ReactJS",price:"Rs756/-"},
        {image:"",title:"NodeJS",price:"Rs650/-"},
        {image:"",title:"Angular",price:"Rs800/-"},
        {image:"",title:"VueJS",price:"Rs700/-"},
        {image:"",title:"React Native",price:"Rs900/-"}
    ]
    
  return (
    <div className='home'>
      {
      itemData.map((item,index)=>{
        return <Item key={index} props={item}/>
      })
      }
    </div>
  )
}

export default Home
