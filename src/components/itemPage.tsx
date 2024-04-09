import React, { useEffect, useState } from "react";
import ItemService from "../services/ItemServices";
import { Item } from "../types/item";
import { Link, useParams } from "react-router-dom";

export default function ItemPage() {

    const [item, setItem] = useState<Item>();
    const {id} = useParams();

    const getItem = (id: string) => {

        ItemService.get(id)
            .then((response: any) => {
                setItem(response.data);
                console.log(item);

            })
            .catch((e: Error) => {
                console.log(e);
                alert(e.message);
            })
    }

    useEffect(() => {
        if(id){
            getItem(id);
        }

    }, []);
    return (

        <div className="container">
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


            <section className="section">
                <h1 className="title">{item?.name}</h1>
                <p className="content">{item?.id}</p>
                <p className="content">${item?.price}</p>
            </section>
        </div>


    );
}
