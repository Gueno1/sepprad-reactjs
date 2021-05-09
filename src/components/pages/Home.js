import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Content from '../Content';
import Contrata from '../Contrata';
import WrapperHome from '../WrapperHome';
import WrapperHomeWhy from '../WrapperHomeWhy';



function Home () {
    return (
        <>

        <HeroSection />
        <Content />
        <Contrata />
        <WrapperHome />
        <WrapperHomeWhy/>
        <Footer />
        
        </>
    );
}

export default Home;