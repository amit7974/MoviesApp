
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FooterComponent from '../Components/Footer';
import HeaderComponent from '../Components/Header';
import AboutContainer from '../Container/About';
import ContactContainer from '../Container/Contact';
import DetailsContainer from '../Container/Details';
import HomeContainer from '../Container/Home';
import MoviesContainer from '../Container/Movies';
import SearchContainer from '../Container/Search';
import TvSeriesContainer from '../Container/TVSeries';
const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path='/about' element={<AboutContainer />} />
                        <Route path="/movies" element={<MoviesContainer />} />
                        <Route path="/series" element={<TvSeriesContainer />} />
                        <Route path="/search" element={<SearchContainer />} />
                        <Route path="/contact" element={<ContactContainer />} />
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
                    </Routes>        
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;
