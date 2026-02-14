import { useState, useEffect } from "react";

export default function Home() {

    const [tgId, setTgId] = useState(null);

    const handleRegister = () => {
        if (!tgId) {
            alert("Не удалось получить Telegram ID");
            return;
        }

        const url = `https://u3.shortink.io/register?utm_campaign=837071&utm_source=affiliate&utm_medium=sr&a=jOsaouv3xH4bDH&ac=test&tg_id=${tgId}`;

        window.location.href = url;
    };

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id;
            setTgId(userId);
        }
    }, []);

    return <div className="home">
        <div className="home-container">
            <button className="btn" onClick={handleRegister}>Register</button>
        </div>
    </div>
}