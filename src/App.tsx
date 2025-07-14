import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="about" element={<>About</>} />
          <Route path="contact" element={<>contact</>} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
