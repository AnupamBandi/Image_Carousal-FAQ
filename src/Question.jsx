import React, { useState } from 'react'


const Question = ({question}) => {
    const [isOpen,setOpen]= useState(false)

  return (
    <section className='mb-4'>
        <div className={isOpen? "Open":"Closed" } >
            <h4>{question.title}</h4>
            <button onClick={()=>setOpen(!isOpen)}>
                {isOpen?"-":"+"}
                </button> 
        </div>
        {isOpen && <p>{question.info}</p>}
    </section>
  )
}

export default Question