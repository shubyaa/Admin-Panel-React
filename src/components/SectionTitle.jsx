import React from 'react'

const SectionTitle = (props) => {
 
  return (
    <div className=" flex flex-col">
          <h1 className=' sm:text-[28px] text-[20px] text-titleBlack
           font-poppins font-semibold'>{props.title}</h1>
          <h5 className=' sm:text-[14px] text-[10px] font-poppins text-hintGrey'>
          {props.desc}
          </h5>
        </div>
  )
}

export default SectionTitle