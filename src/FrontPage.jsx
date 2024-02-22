import { useState } from 'react'
import './FrontPage.css'
import './index.css'
import Vault_logo from './assets/Vault-long-png.png' 

function FrontPage() {
    const [ticketType, setTicketType] = useState('None');

    if (ticketType === "None"){
        return(
            <>
            <a href='/'><img src={Vault_logo} alt="Vault logo" className='MainScreen-logo'/></a>
            <div className='Choice_container'>
              <button className='TicketType-btn' id='CheckType' onClick={() => setTicketType("Check")}>Check Ticket</button>
              <button className='TicketType-btn' id='CreateType' onClick={() => setTicketType("Create")}>Create Ticket</button>
            </div>
            </>
        )
    }else if (ticketType === "Check"){
        window.location = "/Check-Ticket"
    }else if (ticketType === "Create"){
        window.location = "/Create-Ticket"
    }

}

export default FrontPage;