import { useState } from "react"

import ContactsList from "./ContactsList"

const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const [alert, setAlert] = useState("")
    const [contact, setContact] = useState({
        name: '', lastName: '', email: '', phone: ''
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setContact(contact => ({ ...contact, [name]: value }))
    }

    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Please Enter Valid Data!")
            return
        }
        setAlert("")

        setContacts(contacts => ([...contacts, contact]))
        setContact({
            name: '', lastName: '', email: '', phone: ''
        })
    }

    return (
        <div>
            <div>
                <input type="text" name="name" placeholder="Name" value={contact.name} onChange={changeHandler} />
                <input type="text" name="lastName" placeholder="Last Name" value={contact.lastName} onChange={changeHandler} />
                <input type="email" name="email" placeholder="Email" value={contact.email} onChange={changeHandler} />
                <input type="number" name="phone" placeholder="Phone" value={contact.phone} onChange={changeHandler} />
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div>
                {alert && <p>{alert}</p>}
            </div>
            <ContactsList contacts={contacts} />
        </div>
    )
}

export default Contacts
