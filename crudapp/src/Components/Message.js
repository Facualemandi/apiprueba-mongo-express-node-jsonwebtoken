import React from 'react'
import '../Styles/message.css'

const Message = ({msg, bgColor}) => {

  return (
     <>
       <div className='mesageError'>
           <p>  {msg} </p>
       </div>
     </>
  )
}

export default Message