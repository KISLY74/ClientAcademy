import { Link, useLocation } from "react-router-dom"
import "./Footer.scss"

export default function Footer() {
    const { pathname } = useLocation();

    return <footer className="footer">
        <nav className="footer-nav">
            <Link to="/" className={pathname === "/" ? "active" : ""}>
                <span className="icon home"></span>
                <span>Home</span>
            </Link>
            <Link to="/signals" className={pathname === "/signals" ? "active" : ""} >
                <span className="icon signals"></span>
                <span>Signals</span>
            </Link>
            <Link to="/lessons" className={pathname === "/lessons" ? "active" : ""} >
                <span className="icon lessons"></span>
                <span>Lessons</span>
            </Link>
            <Link to="/profile" className={pathname === "/profile" ? "active" : ""} >
                <span className="icon profile"></span>
                <span>Profile</span>
            </Link>
        </nav>
    </ footer>
}