import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/navigation/About";
import Projects from "./components/navigation/Projects";
import Home from "./components/navigation/Home";
import Navigation from "./components/navigation/Navigation";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
