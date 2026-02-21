import { Link, useLocation } from "react-router-dom"
import "./Footer.scss"

export default function Footer() {
    const { pathname } = useLocation();

    return <footer className="footer">
        <nav className="footer-nav">
            <Link to="/" className={pathname === "/" ? "active" : ""}>
                <img className="icon home" alt="" />
                <span>Home</span>
            </Link>
            <Link to="/signals" className={pathname === "/signals" ? "active" : ""} >
                <img className="icon signals" alt="" />
                <span>Signals</span>
            </Link>
            <Link to="/lessons" className={pathname === "/lessons" ? "active" : ""} >
                <img className="icon lessons" alt="" />
                <span>Lessons</span>
            </Link>
            <Link to="/profile" className={pathname === "/profile" ? "active" : ""} >
                <img className="icon profile" alt="" />
                <span>Profile</span>
            </Link>
        </nav>
    </ footer>
}