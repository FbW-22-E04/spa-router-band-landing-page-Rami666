import { BrowserRouter, Route, Routes } from "react-router-dom";
import James from "./James";
import Kirk from "./Kirk";
import Lars from "./Lars";
import Robert from "./Robert";
import Header from "./Header";



function Metallica() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<James />} />
        <Route path="/kirk" element={<Kirk />} />
        <Route path="/lars" element={<Lars />} />
        <Route path="/robert" element={<Robert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Metallica;
