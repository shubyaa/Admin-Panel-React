import React from 'react'
import { right, left } from '../assets'

const CarouselButtons = (props) => {
  return (
    <div className=' flex flex-row p-2' >
        <button  className=' flex rounded-[15px] bg-white p-4 mr-1' onClick={props.onPrevClick}>
            <img src={left} alt="" />
        </button>
        <button className=' flex rounded-[15px] bg-white p-4 ml-1' onClick={props.onNextClick}>
            <img src={right} alt="" />
        </button>
    </div>
  )
}

export default CarouselButtons