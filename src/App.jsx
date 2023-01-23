import { useState } from 'react'
import './App.css'

import UserOutput from './Person/UserOutput'
import UserInput from './Person/UserInput'

const  App= props => {
  const [userNameState, setUerState] = useState({
    username: 'superMax'
  })

  const inputChangeHandler= (event)=>{
    setUerState({
      username : event.target.value
    })
  }                                 

  return(
    <div>
      <UserInput changed={inputChangeHandler} currentName={userNameState.username}/>
      <UserOutput userName={userNameState.username}/>
      <UserOutput userName={userNameState.username}/>
      <UserOutput userName="ola"/>
    </div>
  )
}

export default App
