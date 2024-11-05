import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/home');
    };

    return (
        <nav aria-label="Main navigation">
            <ul className="flex justify-between">
                <li>
                    <button onClick={gotoHome}>Home</button>
                </li>
                <div className="flex">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
