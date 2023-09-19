import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
      </Routes>
<Footer/>
    </>

  )
}

export default App
