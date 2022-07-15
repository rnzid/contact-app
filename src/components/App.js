import React from 'react';
import AddContact from "./AddContact";
import Header from "./Header";
import "./App.css"
import ContactList from "./ContactList";


const App = () => {
  const contacts = [
    {
      id:"1",
      "Name":"Ram",
      "email":"ram@gamail.com"
    },
    {
      id:"2",
      "Name":"sam",
      "email":"sam@gamail.com"
    }
  ]
  return (
  <div>
    <Header/>
    <br/>
    <br/>
    <AddContact/>
    <ContactList contacts={contacts}/>
  </div>
    
  )
}

export default App