import React from 'react';

const InfoCard = ({img, cardTitle,  bgClass}) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure className="pl-5  sm: py-2 my-2"><img src={img} alt="Album"/></figure>
        <div class="card-body text-white">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
         
        </div>
      </div>
      </div>
        
    );
};

export default InfoCard;