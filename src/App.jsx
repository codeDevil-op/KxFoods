import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Discover from './components/discover/Discover'
import Services from './components/ServiceIt/Services'
import Menu from './components/Menu/Menu'
import FreeMeal from './components/freemeal/FreeMeal'
import Serve from './components/serve/Serve'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
     <div className='font-primary overflow-x-hidden '>
     <Navbar/>
     <Discover/>
     <Services/>
     <Menu/>
     <Serve/>
     <FreeMeal/>
     <Footer/>
     </div>
    </>
  )
}

export default App
