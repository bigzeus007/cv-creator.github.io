import './App.css';
import Entete from './Components/Entete';
import Outils from './Components/Outils';
import Formation from './Components/Formation';

function App() {
  return (
    <div className="App" >
      <Outils />
      <div className="monCV">
        <Entete />
        <div>
          <Formation />

        </div>
        <div>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
