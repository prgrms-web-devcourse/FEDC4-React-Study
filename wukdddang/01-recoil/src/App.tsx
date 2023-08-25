import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DefaultPage from "./pages/DefaultPage";
import MainPage from "./pages/MainPage";
import { lazy } from "react";

const CartPage = lazy(() => import("./pages/CartPage"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<DefaultPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
