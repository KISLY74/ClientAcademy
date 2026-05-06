import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signals from "./pages/Signals/Signals";
import Home from "./pages/Home/Home";
import Lessons from "./pages/Lessons/Lessons";
import Profile from "./pages/Profile/Profile";
import "./index.scss";
import { TgContext } from "./context/TgContext";
import { useEffect, useState } from "react";

function App() {
  const [tgId, setTgId] = useState(123484625);
  const [name, setName] = useState("None");

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if(tg) {
      tg.ready();
      const userId = tg.initDataUnsafe?.user?.id;
      const nameTg = tg.initDataUnsafe?.user?.first_name;
      setName(nameTg || "None");
      // setTgId(userId);
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <TgContext.Provider value={{ tgId, name }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </TgContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
