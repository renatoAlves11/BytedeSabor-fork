import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../Assets/Img/icon.svg';
import '../Styles/Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const user = useSelector((state) => state.login.user);

    return (
        <header>
            <div className="logo">
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <i className={isOpen ? "bi bi-x" : "bi bi-list"}></i>
            </div>
            <nav className={isOpen ? "active" : ""}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/pedidos" onClick={toggleMenu}>Pedidos</Link>
                {user ? (
                    <>
                        <Link to="/user" onClick={toggleMenu}>
                            <img src={user.profilePicture} alt="Profile" className="header-profile-picture" />
                        </Link>
                    </>
                ) : (
                    <Link to="/login" onClick={toggleMenu}>Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;