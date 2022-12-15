import "./App.css";
import Home from "./Pages/Home";
import Tp_pia_map from "./Pages/tp_pia/Tp_pia_map";
import Sna_map from "./Pages/sna/Sna_map";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavbar from './Components/SideNavbar';

function App() {
  return (
    <div className="App bg-#F9F1D9">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tp_pia_map" element={<Tp_pia_map />} />
          <Route path="/sna_map" element={<Sna_map />} />
          <Route path="/side_nav" element={<SideNavbar />} />
          {/* <Route path="/od.tp_pia" element={<Od />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
