import { useState } from 'react'
import './CheckTicket.css'
import './index.css'
import Vault_logo from './assets/Vault-long-png.png' 

function Main_container() {
  const [ticketID, setTicketID] = useState('');
  const [code, setCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [cookiesRead, setCookiesRead] = useState(true);

    function handleSubmit(){
        if (ticketID.length != 9 || code.length != 4){
            setErrorMsg('Incorrect input!');
        }
        else{
            console.log(ticketID, code);
        }
    }

    if (cookiesRead){
        return(
        <>
        <a href='/'><img src={Vault_logo} alt="Vault logo" className='MainScreen-logo'/></a>
        <div className='Main_container'>
            <h1>Ticket:</h1>
    
            <div className='Inputs-holder'>
            <input
            type="text"
            placeholder="Ticket ID"
            className="Inputs"
            value={ticketID}
            maxLength={9}
            onChange={(event) => {setTicketID(event.target.value);setErrorMsg('')}}
          />
    
          <input
            type="text"
            placeholder="Code"
            className="Inputs"
            value={code}
            maxLength={4}
            onChange={(event) => {setCode(event.target.value);setErrorMsg('')}}
          />
    
          <button className='Submit-btn' onClick={() => handleSubmit()}>Submit</button>
          <p>{errorMsg}</p>
            </div>
        </div>
        </>
        )
    }else{
        window.location = "/"
    }
}

export default Main_container;