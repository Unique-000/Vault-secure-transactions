import { useState, useEffect } from 'react'
import './CreateTicket.css'
import './index.css'
import Vault_logo from './assets/Vault-long-png.png' 


function Main_container() {
  const [ticketID, setTicketID] = useState('');
  const [code, setCode] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState("");

  function handleInput(event) {
    const inputValue = event.target.value;

    // Check if the input matches the pattern for the specified range
    if (/^(?:\d{0,5}(?:\.\d{0,2})?|\d{1,5})$/.test(inputValue)) {
      setAmount(inputValue);
    }
  };
  
  function handleSubmit(){
    console.log(`${amount}, ${currency}`)
  }

    return(
        <>
        <a href='/'><img src={Vault_logo} alt="Vault logo" className='MainScreen-logo'/></a>
        <div className='Main_container'>
            <h1 className='Ticket-Header'>Ticket:</h1>
    
            <div className='MoneyAmount-Currency'>
              <input
                  type="text"
                  id="amount"
                  name="amount"
                  className="Input"
                  value={amount}
                  onChange={(event) => handleInput(event)}
              />

              <select className='Select-Currency' value={currency} onChange={e => setCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="PLN">PLN</option>
                    <option value="AUD">AUD</option>
              </select>
            </div>
          <button className='Submit-btn' onClick={() => handleSubmit()}>Create Ticket</button>
        </div>
        </>
        )
}

export default Main_container;