
import './App.css';
import { Tooltip } from './Tooltip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Tooltip position={"bottom"} content={"Submit Button"}/>
      </header>
    </div>
  );
}

export default App;
