/*
Frankie Garcia - myFitrackr Function
November 17, 2022 (Upd. 21Nov2022)
*/ 

import './App.css';
import { UserCollin } from './ui-components';
import { NavBar } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ user, signOut}) {
  
  const navbarOverrides = {
    Button: {
      onClick: signOut,
    }
  };

  return (
    <div className="App">

      <NavBar width={"100%"} overrides={navbarOverrides} />

      <header className="App-header">
  
        <UserCollin 
          overrideItems={({ item, index }) => ({
            overrides: {
              updateButton: { color: "black", 
              onClick: () => alert("RELAX! You haven't done anything.")},
              
            },
          })}
        />
          
      </header>
    </div>
  );
}

export default withAuthenticator(App);
