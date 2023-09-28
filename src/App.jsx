import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Radar from './Components/Radar';
import News from './Components/News';
import newsSingle from './Components/newsSingle';
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/radar" element={<Radar />}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/news/:id" component={newsSingle} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
