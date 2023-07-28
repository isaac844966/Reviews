import React, { useState } from 'react'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from "react-icons/fa"
import people from "./data"

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
 
  
  const nextPerson = ()=>{
    setIndex((prevIndex)=>{
      const newIndex = (prevIndex + 1) % people.length;
      return newIndex
    })
  }
  const prevPerson = ()=>{
    setIndex((prevIndex)=>{
      const newIndex = (prevIndex - 1 + people.length) % people.length
     
      return newIndex
    })
  }
  const randomPerson =()=>{
    let randomNumber = Math.floor(Math.random()* people.length)
    
    const newIndex = randomNumber % people.length
    setIndex(newIndex)
  }
  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={image} alt="" className='person-img'/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={()=>prevPerson()}>
            <FaChevronLeft/>
          </button>
          <button className='prev-btn' onClick={()=>nextPerson()}>
            <FaChevronRight/>
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>Suprise me</button>
      </article>
    </main>
  )
}

export default App
