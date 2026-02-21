import { Link, useLocation } from "react-router-dom"
import "./Footer.scss"

export default function Footer() {
    const { pathname } = useLocation();

    return <footer className="footer">
        <nav className="footer-nav">
            <Link to="/" className={pathname === "/" ? "active" : ""}>
                <img src={`/images/${pathname === "/" ? "homeactive" : "home"}.png`} alt="" />
                <span>Home</span>
            </Link>
            <Link to="/signals" className={pathname === "/signals" ? "active" : ""} >
                <img src={`/images/${pathname === "/signals" ? "signalsactive" : "signals"}.png`} alt="" />
                <span>Signals</span>
            </Link>
            <Link to="/lessons" className={pathname === "/lessons" ? "active" : ""} >
                <img src={`/images/${pathname === "/lessons" ? "lessonsactive" : "lessons"}.png`} alt="" />
                <span>Lessons</span>
            </Link>
            <Link to="/profile" className={pathname === "/profile" ? "active" : ""} >
                <img src={`/images/${pathname === "/profile" ? "profileactive" : "profile"}.png`} alt="" />
                <span>Profile</span>
            </Link>
        </nav>
    </ footer>
}