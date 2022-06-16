import {useState} from 'react';
import './App.css';
import { List } from './components/List/List'
import { Button } from './components/Button/Button'

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="App">
        <h1 className="title"> Ordering List</h1>
        <div className="ButtonsContainer">
          <Button text="Ascending"className="Ascending" onClick={() => setShowList(true)} />
          <Button text="Descending"className="Descending" onClick={() => setShowList(false)} />
        </div>
        {showList && <List />}        
    </div>
  );
}

export default App;
