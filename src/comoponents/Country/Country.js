import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, flag, region, population} =props.country;
    
    console.log(props)
    return (
        <div className='country'>
            <h2>This is : {name}. </h2>
            <p>Capital : {capital}</p>
            <img src={flag} alt="" />
            <h4>Region : {region}</h4>
            <h5>Population : {population}</h5>
           
        </div>
    );
};

export default Country;