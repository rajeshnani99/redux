import "./App.css";
import { Routes, Route } from "react-router-dom";
import ItemDisplay from "./components/ItemDisplay/ItemDisplay";
import Header from "./components/header/Header";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemDisplay />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
