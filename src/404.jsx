import { useState } from 'react'
import './App.css' 
import './index.css'
import Vault_logo from './assets/Vault-long-png.png' 

function NotFound() {
  const [count, setCount] = useState(1)

  return (
    <>
    <a href='/'><img src={Vault_logo} alt="Vault logo" className='MainScreen-logo'/></a>
    <h1>ERROR</h1>
    </>
  )
}

export default NotFound
