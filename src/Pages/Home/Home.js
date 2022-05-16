import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info ></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Contact></Contact>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;