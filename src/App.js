import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import SoalrPanel from './components/SoalrPanel';
import PolyCrystalline66Cell from './components/PolyCrystalline66Cell';
import Contact from './components/Contact';
import PolyCrystalline72Cell from './components/PolyCrystalline72Cell';
function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/solarpanel" element={<SoalrPanel />} />
        <Route path="/productPC66" element={<PolyCrystalline66Cell />} />
        <Route path="/productPC72" element={<PolyCrystalline72Cell />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
