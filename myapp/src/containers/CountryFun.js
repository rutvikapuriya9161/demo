import React, { useState } from 'react';

function CountryFun(props) {

    const[CountryName, setCountryName] = useState('India');

    const changeCountry = () => {
        setCountryName('US');
    }
    
    return (
        <div>
            <p>{CountryName}</p> 
            <button onClick={() => changeCountry()}>Change Country</button>
        </div>
    );
}

export default CountryFun;