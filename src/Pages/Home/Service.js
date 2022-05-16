import React from 'react';

// shadow-xl-1
const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl my-5 mx-3">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Service;