import './App.css';
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Myorders from './components/Myorders'
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
          <Route exact path='/aboutus' element={<Aboutus/>} />
          <Route exact path='/orders' element={<Myorders/>} />
          <Route path='/hotelpage/:id' element={<Hotelpage />} />
        </Routes>
      </ScrollToTop>




    </>
  );
}

export default App;
