import logo from './logo.svg';
import './App.css';
import Characte from './component/Characte';
import Car from './component/ClassTest';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
      <Route path="/:id" element={<Characte />} />
      <Route path="/car/"  element={<Car name="bmw" />} />
      </Routes>
    
      </BrowserRouter>
   
    </div>
  );
}

export default App;
