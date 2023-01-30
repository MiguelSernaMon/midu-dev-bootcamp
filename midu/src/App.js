import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>Es es la app fullstack bootcamp</p>
}
function App() {
  
  return (
    <div className="App">
      <Mensaje message="Estamos Trabajando" color="red"/>
      <Mensaje message="En curso de react" color="blue"/>
      <Mensaje message="xD" color="green"/>
      <Description />
    </div>
  );
}

export default App;
