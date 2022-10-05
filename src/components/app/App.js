
import './App.css';
import { Tooltip } from '../tooltip/Tooltip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* calling the tooltip component */}
          <Tooltip position={"left"} content={"Submit left"}/>
          <Tooltip position={"top"} content={"Submit top"}/>
          <Tooltip position={"bottom"} content={"Submit bottom"}/>
          <Tooltip position={"right"} content={"Submit right"}/>
      </header>
    </div>
  );
}

export default App;
