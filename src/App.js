import './App.css';
import Entete from './Components/Entete';
import Outils from './Components/Outils';
import Formation from './Components/Formation';
import Divers from './Components/Divers';
import Experiences from './Components/Experiences';
import Realisations from './Components/Realisations';
import Langues from './Components/Langues';

function App() {
  return (
    <div className="App" >
      <Outils />
      <div className="monCV">
        <Entete />
        <div className="corpsCV">
          <div className="lePrioritaire">
            <Formation />
            <Experiences />
            <Realisations />
            <Langues />

          </div>
          <div className="leSecondaire">
            <Divers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
