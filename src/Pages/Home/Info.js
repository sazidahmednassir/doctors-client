import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
     <div className="mx-5 sm: py-2">   <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
     <InfoCard  cardTitle="Opening Hours"  bgClass="bg-gradient-to-r from-secondary to-primary"  img={clock}></InfoCard>
     <InfoCard  cardTitle="Our Locations" bgClass="bg-[#3d4451]" img={marker }></InfoCard>
     <InfoCard  cardTitle="Contact Us"  bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
 </div></div>
    );
};

export default Info;