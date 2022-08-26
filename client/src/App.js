import Home from "./pages/Home/Home";
import HotelList from "./pages/HotelList/HotelList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()  => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<HotelList />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
