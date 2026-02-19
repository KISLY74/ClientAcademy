import "./Header.scss";

export default function Header({name}) {


    return <header className="header">
        <div className="header-container">
            <div className="content-logo">
                <img src="/images/pocketLogo.png" alt="" />
                <p>Pocket <span>Academy</span></p>
            </div>
            <div className="content-avatar">
                <p>{name}</p>
                <img src="/images/avaDef.png" alt="" />
                {/* <img src="/images/avaDef.png" alt="" /> */}
            </div>
        </div>
    </header>
} 