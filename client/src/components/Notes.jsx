import React, { useState } from 'react'
import '../styles/notes.css'


const Notes = ({title,body}) => {
    
    return (
        <div className='notes'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
  )
}

export default Notes