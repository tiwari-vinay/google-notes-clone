import React from 'react'
import '../styles/footer.css'

let date = new Date().getFullYear();
const Footer = () => {
  return (
    <div className='footer'>copyright &#169; {date}</div>
  )
}

export default Footer