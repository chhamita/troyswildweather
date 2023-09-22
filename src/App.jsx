import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hourly from './Pages/Hourly';
import TenDays from './Pages/TenDays';
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/hourly" element={<Hourly />}></Route>
        <Route path="/tendays" element={<TenDays />}></Route>
        
      </Routes>
      <Footer />
    </>

  )
}

export default App
