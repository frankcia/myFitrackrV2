import './App.css';
import { UserCollin } from './ui-components';
import { NavBar } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listMyfitrackrv2DBS } from './graphql/queries';
import { useEffect, useState } from 'react';


function App({ user, signOut}) {
  const [myfitrackrv2DB, setMyfitrackrv2DB] = useState([]);

  useEffect(() => {
    fetchMyfitrackrv2DB()
  }, []);

  const fetchMyfitrackrv2DB = async () => {
    try {
      const myfitrackrv2DBData = await API.graphql(graphqlOperation(listMyfitrackrv2DBS));
      const myfitrackrv2DBList = myfitrackrv2DBData.data.listMyfitrackrv2DBS.items;
      console.log('Myfitrackrv2DB List', myfitrackrv2DBList);
      setMyfitrackrv2DB(myfitrackrv2DBList)
    } catch (error) {
      console.log('error on fetching Myfitrackrv2DB', error);

    }
  }
  
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
