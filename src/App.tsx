import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';

import ItemPage from './components/itemPage';
import {Authenticator} from "@aws-amplify/ui-react";
import Itemsadmin from './components/itemAdmin'
import Items from "./components/items"
import Book from "./components/books"
function App() {
    return (
        <Router>
            <Header />
            <Authenticator loginMechanisms={['email']} signUpAttributes={['name']}>
            <Routes>
                <Route path='/admin' element={<Itemsadmin/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/items' element={<Items/>}/>
                <Route path='/book' element={<Book/>}/>
                <Route path='/items/:id' element={<ItemPage/>}/>

            </Routes>
            </Authenticator>
            <Footer />
        </Router>

    );
}

export default App;
