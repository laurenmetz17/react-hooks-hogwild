import React from 'react';
import Hog from './Hog.js';

function HogList({hoggys}) {

    const hogs = hoggys.map((hog) => (
        <Hog className='ui eight wide column' name={hog.name} image={hog.image} weight={hog.weight} greased={hog.greased} highestMedal={hog["highest medal achieved"]}/>
    ))
    return (
        <div className='ui grid container'>
            {hogs}
        </div>
    )

}

export default HogList;