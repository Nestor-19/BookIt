import Home from "./pages/Home/Home";
import HotelList from "./pages/HotelList/HotelList";
import Hotel from "./pages/Hotel/Hotel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


const App = ()  => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<HotelList />}/>
        <Route path="/hotels/:id" element={<Hotel />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
