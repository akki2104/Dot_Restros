import './App.css';
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Myorders from './components/Myorders'
import Hotelpage from './components/Hotelpage'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Guest from './components/Guest'
import Cancellation from './components/Cancellation'
import Contactus from './components/Contactus'

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
          <Route exact path='/myorders' element={<Myorders/>} />
          <Route exact path='/terms' element={<Terms/>} />
          <Route exact path='/privacy' element={<Privacy/>} />
          <Route exact path='/guest' element={<Guest/>} />
          <Route exact path='/cancellation' element={<Cancellation/>} />
          <Route exact path='/contactus' element={<Contactus/>} />
          <Route path='/hotelpage/:id' element={<Hotelpage />} />
        </Routes>
      </ScrollToTop>




    </>
  );
}

export default App;
