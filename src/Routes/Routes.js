import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CardDetail from '../Components/CardDetail/CardDetail';
import Nav from '../Components/Nav/Nav';
import Create from '../Pages/Create/Create';
import Favorites from '../Pages/Favorites/Favorites';
import Home from '../Pages/Home/Home';
import Pokemones from '../Pages/Pokemones/Pokemones';

const Rout = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Create />} />
                    <Route path="/login" element={<Create />} />
                    <Route path="/team" element={<Favorites />} />
                    <Route path="/pokemones" element={<Pokemones />} />
                    <Route path="/pokemon/:id" element={<CardDetail />} />
                    <Route path="/pokemon/name" element={<CardDetail />} />
                    <Route path="/crear" element={<Create />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Rout
