import React from 'react'
import CarSlider from '../components/CaraSlider'
import Content from '../components/Content'
export default function HomePage() {
  console.log("home page")
  const containerStyles = {
    width:'100vw',
    height:'100vh',
    
    };

  return (
    <div>
    
    <div style={containerStyles} >
    <CarSlider />
    </div>
    <Content/>
    </div>
  )
}
