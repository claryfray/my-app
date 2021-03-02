import logo from './logo.svg';
import './App.css';
import CityForm from './CityForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>World Clock</h1>
        <p>Enter a city and its <a href="https://en.wikipedia.org/wiki/List_of_UTC_time_offsets">GMT offset</a> to get the time!
        </p>
        <CityForm></CityForm>
        
      </header>
    </div>
  );
}

export default App;
