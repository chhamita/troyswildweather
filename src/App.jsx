import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Radar from './Components/Radar';
import SingleNews from './Pages/singleNews';



function App({ newsData }) {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/radar" element={<Radar />}></Route>
        <Route path="/news/:title" render={(props) => <SingleNews {...props} newsData={newsData} />} />
        {/* <Route path="/news" element={<SingleNews />} /> */}
      </Routes>
      <Footer />
    </>

  )
}

export default App
