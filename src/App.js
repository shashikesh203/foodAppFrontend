import Register from "./pages/Register";
import FirstPage from "./pages/firstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FrontPage from "./pages/FrontPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/third-page" element={<ThirdPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/FrontPage" element={<FrontPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
