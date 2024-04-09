import React from "react";
import {Link} from "react-router-dom";

export default function Home() {

    return (<section className="hero is-info is-large">

            <div className="hero-head">
                <nav className="navbar">

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
