import { useState, useEffect } from "react";

export default function Home() {

    const [tgId, setTgId] = useState(null);

    const debugAlert = () => {
        const tg = window.Telegram;
        const wa = window.Telegram?.WebApp;
        const data = window.Telegram?.WebApp?.initDataUnsafe;

        alert(
            "Telegram: " + JSON.stringify(tg) + "\n\n" +
            "WebApp: " + JSON.stringify(wa) + "\n\n" +
            "initDataUnsafe: " + JSON.stringify(data) + "\n\n" +
            "user: " + JSON.stringify(data?.user) + "\n\n" +
            "user.id: " + data?.user?.id
        );
    };

    const handleRegister = () => {
        if (!tgId) {
            alert("Не удалось получить Telegram ID");
            debugAlert();
            return;
        }

        const url = `https://u3.shortink.io/register?utm_campaign=837071&utm_source=affiliate&utm_medium=sr&a=jOsaouv3xH4bDH&ac=test&sub_id1=${tgId}`;

        window.location.href = url;
    };

    useEffect(() => {
        const tg = window.Telegram?.WebApp;

        if (tg) {
            tg.ready();
            const userId = tg.initDataUnsafe?.user?.id;
            setTgId(userId);
        }
    }, []);

    return (
        <div className="home">
            <div className="home-container">
                <button className="btn" onClick={handleRegister}>Register</button>
                <button className="btn" onClick={debugAlert} style={{ marginTop: 20 }}>Debug</button>
            </div>
        </div>
    );
}
