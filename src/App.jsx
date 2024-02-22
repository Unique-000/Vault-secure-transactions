import { useState } from 'react'
import './App.css' 
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './FrontPage.jsx'
import CheckTicket from './CheckTicket.jsx'
import CreateTicket from './CreateTicket.jsx'
import NotFound from './404.jsx'

function App() {

  return (
    <div className='Hero'>
    <BrowserRouter>
      <Routes>
          <Route path="/Check-Ticket" element={<CheckTicket/>} />
          <Route path="/Create-Ticket" element={<CreateTicket/>} />
          <Route path="/" element={<FrontPage/>} />
          <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
