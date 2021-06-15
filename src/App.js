import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Messages from './components/Messages'

class App extends Component {
 
  render () {

    return (
     <div className='box'>
       <div>
         <div className='message'>
           
         </div>
       </div>
       <Formulaire/>
     </div>
     
    )
  }
}

export default App