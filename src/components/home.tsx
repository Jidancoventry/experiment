import React from "react";
import {Link} from "react-router-dom";

export default function Home() {

    return (<section className="hero is-info is-large">

            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src="https://bulma.io/assets/images/bulma-type-white.png" alt="Logo"/>
                            </a>
                            <span className="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
                        </div>
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
                    </div>
                </nav>
            </div>


            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">Byte reads</p>
                    <p className="subtitle">May Knowledge Guide you</p>
                </div>
            </div>


            <div className="hero-foot">
                <nav className="tabs">
                    <div className="container">
                        <ul>
                            <li className="is-active"><a>Overview</a></li>
                            <li><a>Modifiers</a></li>
                            <li><a>Grid</a></li>
                            <li><a>Elements</a></li>
                            <li><a>Components</a></li>
                            <li><a>Layout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}
