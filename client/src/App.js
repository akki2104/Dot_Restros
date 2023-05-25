import './App.css';
// -----------------------singh---------------------
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import Register from "./components/Register";
import Home from "./components/Home"
// -----------------------singh---------------------
import './index.css';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
