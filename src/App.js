import './App.css';
import Home from './components/Home'
import Hotelpage from './components/Hotelpage'
// import Flyer from './components/Flyer'
// import Hotelcard from './components/Cards'
// import Grid from '@mui/material/Grid';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/hotelpage/:id' element={<Hotelpage />} />
        </Routes>
      </ScrollToTop>




    </>
  );
}

export default App;
