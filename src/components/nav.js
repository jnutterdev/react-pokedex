import React from 'react';
import logo from './Images/pokedex.png';

class Nav extends React.Component {
render() {
    return (
        <nav className="navbar is-light">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#home">
                        <img src={logo} alt="Pokedex" />
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active" href="#home">
                            Home
      </a>
                        <a className="navbar-item" href="#home">
                            Examples
      </a>
                        <a className="navbar-item" href="#home">
                            Features
      </a>
                        <a className="navbar-item" href="#home">
                            Team
      </a>
                        <a className="navbar-item" href="#home">
                            Archives
      </a>
                        <a className="navbar-item" href="#home">
                            Help
      </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
}

export default Nav;