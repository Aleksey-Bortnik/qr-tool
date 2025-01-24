import { Link } from "react-router-dom"
import './Navigation.scss'

export const Navigation = () => {
    return (
        <nav className="nav-pannel">
            <Link className="nav-link" to={'/generator'}>Generate QR code</Link>
            <Link className="nav-link" to={'/'}>Scan QR code</Link>
            <Link className="nav-link" to={'/scanned-history'}>Scan History</Link>
            <Link className="nav-link" to={'/generate-history'}>Generate History</Link>
        </nav>
    )
}
