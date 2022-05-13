import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from './components/Form';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Form />}/>
        <Route exact path="/table" element={<Table />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
