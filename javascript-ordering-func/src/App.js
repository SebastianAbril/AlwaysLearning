import './App.css';

import { Button } from './components/Button/Button'

function App() {
  return (
    <div className="App">
        <h1 className="title"> Ordering List</h1>
        <div className="ButtonsContainer">
          <Button text="Ascending"className="Ascending" />
          <Button text="Descending"className="Descending" />
        </div>
       

        
    </div>
  );
}

export default App;
