import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import NavBar from './Component/NavBar'
import SideBar from './Component/SideBar'
import MessageComponent from './Component/MessageComponent'
import BodyContain from './Component/BodyContain'


const App = function () {

  return (
    <>
      <NavBar/>
      <div className='flex w-full justify-between h-[500px]'>
        <SideBar/>
        <BodyContain/>
        <MessageComponent/>
      </div>   
    </>
  )
}


export default App;
