import './App.css';
// -----------------------singh---------------------
import { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Register from "./components/Register";
import Home from "./components/Home"
import Secret from "./components/Secret"
import Logout from "./components/Logout"
import Aboutus from './components/Aboutus';
import MyOrders from './components/Myorders';
import { initialState, reducer } from './reducer/UseReducer';
// -----------------------singh---------------------
import './index.css';
import ScrollToTop from './components/Scrolltop';
// 1.ContextApi
export const UserContext = createContext();
const Routing = ()=>{
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
        </ScrollToTop>
      </Router>
  )
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Routing/>
      </UserContext.Provider>

    </>
  );
}

export default App;
