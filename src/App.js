import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home_page from "./pages/Home-page";
import { AboutPage } from "./pages/about-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
