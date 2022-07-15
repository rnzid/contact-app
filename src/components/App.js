import React, { Fragment } from 'react';
import AddContact from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList";


const App = () => {
  return (
  <div>
    <Header/>
    <AddContact/>
      {/*<ContactList/> */}
  </div>
    
  )
}

export default App