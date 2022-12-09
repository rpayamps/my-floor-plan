
import './App.css';
import Circle from "./Circle"
import Square from "./Square";

function App() {
  return (
    <div className="app">
    <h1> Select and drag the Shape!</h1>
    <div className="floor">

    </div>

    <div className='selectable-items'>
    <ol>
    <li><Circle/></li>
    <li><Square/></li>
    </ol>
    </div>
  </div>
  );
}

export default App;
