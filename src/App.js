import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import FAQs from './pages/FAQs';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="faqs" element={<FAQs />} />    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
