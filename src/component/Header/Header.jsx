import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light nav bg-light justify-content-between">
        <a className="navbar-brand  ms-4 fs-3 fw-semibold fst-italic"> PBookStore</a>
        <div className="nav-image">
            <img src="https://images.unsplash.com/photo-1632333528660-f0bed1510411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=8" alt="" />
        </div>
      </nav>
        </div>
    );
};

export default Header;