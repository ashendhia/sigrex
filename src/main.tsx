import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./components/Home/App";
import "./index.css";
import Formations from "./components/Formation/Formations";
import Formation from "./components/Formation/Formation";

import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Formateur from "./components/Formation/Formateur";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/formations/formation" element={<Formation />} />
      <Route path="/formateurs" element={<Formateur />} />

      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);
