import { useState, useEffect } from "react";
import "./Home.scss"
import Header from "../../components/Header/Header";
import RegisterNow from "../../components/RegisterNow/RegisterNow";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    const [tgId, setTgId] = useState(8222966719);
    const [name, setName] = useState("None")

    //    const tg = window.Telegram.WebApp;

    // const user = tg.initDataUnsafe.user;

    // console.log(user.first_name);   // Имя
    // console.log(user.last_name);    // Фамилия (может быть null)
    // console.log(user.username);     // @username (может быть null)
    // console.log(user.id);           // Telegram ID


    useEffect(() => {
        const tg = window.Telegram?.WebApp;

        if (tg) {
            tg.ready();
            const userId = tg.initDataUnsafe?.user?.id;
            const nameTg = tg.initDataUnsafe?.user?.first_name;
            setName(nameTg);
            setTgId(userId);
        }
    }, []);

    return (
        <div className="home">
            <div className="home-container">
                <Header name={name} />
                <RegisterNow />
                <Footer />
            </div>
        </div>
    );
}
