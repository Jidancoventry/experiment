import React, { useEffect, useState } from "react";
import ItemService from "../services/ItemServices";
import { Item } from "../types/item";
import { Link } from "react-router-dom";

export default function Items() {

    const [items, setItems] = useState<Item[]>([]);

    const getItems = () => {

        ItemService.getAll()
            .then((response: any) => {
                setItems(response.data);
                console.log(items);

            })
            .catch((e: Error) => {
                console.log(e);
                alert(e.message);
            })
    }

    useEffect(() => {
        getItems();
    }, []);
    return (
        <div className="container is-fluid">

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


                    <p className="title">this is item page</p>
                    <p className="subtitle"></p>
                </div>
            </section>

            <section className="section">
                <h1 className="title">Item Catalogue</h1>
            </section>
            <div className="columns is-multiline">
                {
                    items.map((item, index) => (
                        <div className="column">
                            <div className="card">
                                <div className="card=header">
                                    <h2 className="card-header-title"> {item.name}</h2>
                                </div>
                                <div className="card-content">
                                    <p className="content">{item.id}</p>
                                    <p className="content">${item.price}</p>
                                </div>
                                <div className="card-footer">
                                    <Link className="button is-rounded is-danger" to={`/items/${item.id}`}>View
                                        Item</Link>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
