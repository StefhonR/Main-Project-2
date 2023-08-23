import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='nav'>
            <Link to="/">
                <div className="nav-item">HOME</div>
            </Link>
            <Link to="/search">
                <div className="nav-item">SEARCH</div>
            </Link>
            <Link to="/about">
                <div className="nav-item">ABOUT</div>
            </Link>
        </div>
    )
}