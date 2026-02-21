import "./RegisterNow.scss";

export default function RegisterNow() {

    const handleRegister = () => {
        if (!tgId) {
            alert("Не удалось получить Telegram ID");
            debugAlert();
            return;
        }

        const url = `https://u3.shortink.io/register?utm_campaign=837071&utm_source=affiliate&utm_medium=sr&a=jOsaouv3xH4bDH&ac=test&sub_id1=${tgId}`;

        window.location.href = url;
    };

    return <section className="section section-register">
        <div className="section-container">
            <div className="content-header">
                <img src="/images/warning.png" alt="" />
                <div className="title-container">
                    <p>Action Required</p>
                    <p>You are not registered in PocketOption yet</p>
                </div>
            </div>
            <button className="btn-register" onClick={handleRegister}>
                <img src="/images/regNew.png" alt="" />
                <p>Register Now</p>
            </button>
            <p className="text-bottom">Complete registration to access all Pocket Academy features</p>
        </div>
    </section>
}