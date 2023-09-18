import { useState } from 'react'
import './App.css'
import {Route} from "react-router-dom"
import Homepage from "../src/homepage"
import chats from "../src/chats"


function App() {


  return (
    <>
<Route path="/" component={Homepage} exact/>
<Route path="/chats" component={chats}/>
    </>
  )
}

export default App
