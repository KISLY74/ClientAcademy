import { useState, useEffect } from "react";
import "./Home.scss"
import Header from "../../components/Header/Header";
import RegisterNow from "../../components/RegisterNow/RegisterNow";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { TgContext } from "../../context/TgContext";
import Registered from "../../components/Registered/Registered";
import StatusProgress from "../../components/StatusProgress/StatusProgress";

export default function Home() {
    const { tgId, name } = useContext(TgContext)
    const [isReg, setIsReg] = useState(true)

    useEffect(() => {

    }, []);

    return (
        <div className="home">
            <div className="home-container">
                <Header name={name} />
                <StatusProgress tgId={tgId}/>
                {!isReg ? <RegisterNow tgId={tgId} /> : <Registered />}
                <Footer />
            </div>
        </div>
    );
}
