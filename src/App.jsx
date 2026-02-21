import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signals from "./pages/Signals/Signals";
import Home from "./pages/Home/Home";
import Lessons from "./pages/Lessons/Lessons";
import Profile from "./pages/Profile/Profile";
import "./index.scss";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
