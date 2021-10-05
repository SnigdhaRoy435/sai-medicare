import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory()

    // logout code 
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        console.log('user removed');
        window.location.reload(false);
        history.push('/');
    }

    // code before login 
    const loginRegLink = (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse" id="navbarLinks">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )


    const userLink = (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="collapse navbar-collapse" id="navbarLinks">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/logout" onClick={logOut}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

    return (
        <>



            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarLinks">
                        <ul className="navbar-nav">
                            <li className="nav-item @@home">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about" style={{ textDecoration: "none" }}>About</Link>
                            </li>
                            <li className="nav-item @@service">
                                <Link className="nav-link" to="/service">Service</Link>
                            </li>
                            <li className="nav-item @@gallery">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>

                            <li className="nav-item @@appointment">
                                <Link className="nav-link" to="/contact">Appointment</Link>
                            </li>

                            <li className="nav-item @@contact">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;