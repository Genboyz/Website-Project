import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <div className="flex flex-col w-screen bg-slate-100">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="team">
                <Team />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
