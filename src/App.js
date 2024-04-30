import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home_page from "./pages/Home-page";
import { AboutPage } from "./pages/about-page";
import { TermsCondPage } from "./pages/term-and-cond";
import { TourDetailPage } from "./pages/tour-details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms-and-condition" element={<TermsCondPage />} />
          <Route path="/tour-details" element={<TourDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
