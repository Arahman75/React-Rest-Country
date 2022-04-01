import React, { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useState(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
           <h3>This is country details: {countries.length}</h3>
          <div className='countries-container'>
          {
               countries.map(country => <Country 
                country={country}
                key={country.alpha3Code}
                ></Country>)
           }
          </div>
        </div>
    );
};

export default Countries;