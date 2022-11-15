import './App.css';
import { 
  UserCollin 
} from './ui-components';
import { 
  NavBar 
} from './ui-components';

function App() {
  return (
    <div className="App">

      <NavBar width={"100%"}/>

      <header className="App-header">
        <UserCollin />
      </header>
    </div>
  );
}

export default App;
