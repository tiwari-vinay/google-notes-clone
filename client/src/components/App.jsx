import React from 'react'

import Footer from './Footer'
import Time from './Time'
import Create from './Create'

import '../styles/app.css'


const App = () => {
  return (
    <div className='outer-container'>
      <div className='header'>
        <h1>Keep Notes</h1>
        <h4><Time/></h4>
      </div>
      <Create />
      <Footer />
    </div>
  )
}

export default App