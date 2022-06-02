import React, { useState } from 'react';

function CityFun(props) {

    const[CityName, setCityName] = useState('Surat');

    const changeCity = () => {
        setCityName('Jamnagar');
    }
    
    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => changeCity()}>Change City</button>
        </div>
    );
}

export default CityFun;