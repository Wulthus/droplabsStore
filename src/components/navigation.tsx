import { Link } from "react-router-dom"

export const Navigation: React.FC = function(){
    return(
        <nav className="navbar">
            <h2>Navigation</h2>
            <br />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
    )
}