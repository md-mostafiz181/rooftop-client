import React from 'react';
import "./SectionTitle.css"

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center w-4/12 mx-auto'>
            <p className='text-yellow-400 text-1xl font-normal mb-3'>---{subHeading}---</p>
            <h3 className='uppercase lg:text-4xl font-bold primaryFont border-y-4 py-3'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;