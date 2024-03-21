import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">

                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to='/' className='navbar-item'></Link>
                    <Link to='/about' className='navbar-item'></Link>
                    <Link to='/items' className='navbar-item'></Link>
                </div>
            </div>
        </nav>
    );


}