import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Leaders from "./pages/Leaders";
import Info from "./pages/Info";
import Testimonials from "./pages/Testimonials";
import Join from "./pages/Join";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#ECE7E1] text-[#111315]">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/leaders" element={<Leaders />} />
            <Route path="/info" element={<Info />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
