import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="hero is-small is-info">

            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c46c7f62556223.5a945f059c90e.png"
                 width={100} height={100} alt="Logo "/>
            <div className="hero-body">
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        {/*<a className="navbar-item is-active"> Home </a>*/}
                        <Link to='/' className='navbar-item'>Home</Link>
                        <Link to='/book' className='navbar-item'>books</Link>
                        <Link to='/about' className='navbar-item'>About</Link>
                        <a className="navbar-item"> comments </a>
                        <Link to='/items' className='navbar-item'>Items</Link>
                         <Link to='/admin' className='navbar-item'>Admin</Link>
                        <span className="navbar-item">

            </span>
                    </div>
                </div>


                <p className="title"></p>
                <p className="subtitle"></p>
            </div>
        </section>


    );


}