
import './App.css';
import { Tooltip } from '../tooltip/Tooltip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* calling the tooltip component */}
          <Tooltip position={"top"} content={"Submit Button"}/>
      </header>
    </div>
  );
}

export default App;
