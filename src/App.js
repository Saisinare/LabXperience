import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Lab from "./Lab";
import AC_Main from "./practicals/AC/AC_Main";
import EX1Main from "./practicals/AC/EX1/EX1Main";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/lab/AC" element={<AC_Main/>} />
        <Route path="/lab/AC/EX1" element={<EX1Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
