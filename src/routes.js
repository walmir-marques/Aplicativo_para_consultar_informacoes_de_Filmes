import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index";

import Filme from "./pages/filme";
import Favoritos from "./pages/Favoritos";
import Home from "./pages/home/index";
import Erro from "./pages/erro/index";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
