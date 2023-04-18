import React from 'react'
import { useState } from 'react'

import '../styles/time.css'

let time = new Date().toLocaleTimeString();

const Time = () => {
  const [t ,updateTime] = useState(time);

  const update = ()=>{
    time = new Date().toLocaleTimeString();
    updateTime(time);
  }

  setInterval(update,1000)


  return (
    <div className='time'>
      <h2>{time}</h2>
    </div>
  )
}

export default Time;