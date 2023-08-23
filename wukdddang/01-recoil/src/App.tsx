import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DefaultViews from "./pages/DefaultPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<DefaultViews />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
