import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routeer from './routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routeer />
      </BrowserRouter>
    </div>
  );
}

export default App;
