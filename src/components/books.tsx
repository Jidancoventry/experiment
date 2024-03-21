import React from "react";
import {Link} from "react-router-dom";

export default function Book() {

    return (

        <section className="hero is-small is-primary">
            <div className="hero-body">
    <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end">
            {/*<a className="navbar-item is-active"> Home </a>*/}
            <Link to='/' className='navbar-item'>Home</Link>
            <Link to='/book' className='navbar-item'>books</Link>
            <Link to='/about' className='navbar-item'>About</Link>
            <a className="navbar-item"> comments </a>
            <Link to='/items' className='navbar-item'>Items</Link>
            <span className="navbar-item">
              <a className="button is-primary is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
        </div>
    </div>


                <p className="title"></p>
                <p className="subtitle"></p>
            </div>
        </section>

    );
}