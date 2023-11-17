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
import MonoCrystalline72Cell from './components/MonoCrystalline72Cell';
import MonoCrystalline144Cell from './components/MonoCrystalline144Cell';
import LiB from './components/LiB';
import LiNMC from './components/LiNMC';
import LiLFP from './components/LiLFP';
import SolarWaterHeater from './components/SolarWaterHeater';
import SolarwaterheaterETC from './components/SolarwaterheaterETC';
import Swhfpc from './components/Swhfpc';
import Blog from './components/Blog';
import Blog1 from './components/Blog1';

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/solarpanel" element={<SoalrPanel />} />
        <Route path="/libattery" element={<LiB />} />
        <Route path="/solarwaterheater" element={<SolarWaterHeater />} />
        <Route path="/productPC66" element={<PolyCrystalline66Cell />} />
        <Route path="/productPC72" element={<PolyCrystalline72Cell />} />
        <Route path="/productMC66" element={<MonoCrystalline72Cell />} />
        <Route path="/productMC144" element={<MonoCrystalline144Cell />} />
        <Route path="/linmc" element={<LiNMC />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/lilfp" element={<LiLFP />} />
        <Route path="/heaterETC" element={<SolarwaterheaterETC />} />
        <Route path="/heaterFPC" element={<Swhfpc />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
